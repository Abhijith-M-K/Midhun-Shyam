"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

function IrisBlade({ rotation, isOpen }: { rotation: number, isOpen: boolean }) {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame(() => {
        if (meshRef.current) {
            const targetRotation = isOpen ? 0 : 0.4;
            meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetRotation, 0.15);
        }
    });

    return (
        <group rotation={[0, 0, rotation]}>
            <mesh ref={meshRef} position={[0.4, 0, 0]}>
                <planeGeometry args={[0.8, 0.4]} />
                <meshStandardMaterial color="#18181b" side={THREE.DoubleSide} metalness={0.8} roughness={0.2} />
            </mesh>
        </group>
    );
}

function CameraIris({ isClicking }: { isClicking: boolean }) {
    const groupRef = useRef<THREE.Group>(null);
    const [isOpen, setIsOpen] = useState(true);

    useFrame((state) => {
        if (groupRef.current) {
            // Subtle mouse follow - limited movement
            const x = (state.mouse.x * 0.1);
            const y = (state.mouse.y * 0.1);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y, 0.1);
        }
        
        // Handle clicking state
        if (isClicking) {
            setIsOpen(false);
            setTimeout(() => setIsOpen(true), 150);
        }
    });

    const blades = useMemo(() => Array.from({ length: 8 }).map((_, i) => (i * Math.PI * 2) / 8), []);

    return (
        <group ref={groupRef} position={[1.5, 0, 2]}> {/* Moved to the right */}
            {/* Outer Lens Ring */}
            <mesh>
                <torusGeometry args={[1, 0.08, 16, 100]} /> {/* Smaller radius */}
                <meshStandardMaterial color="#27272a" metalness={1} roughness={0.2} />
            </mesh>

            {/* Glass Front */}
            <mesh position={[0, 0, 0.1]}>
                <circleGeometry args={[0.9, 32]} />
                <MeshTransmissionMaterial 
                    backside 
                    samples={4} 
                    thickness={0.3} 
                    chromaticAberration={0.05} 
                    distortion={0.2} 
                    color="#ffffff"
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* Iris Blades */}
            <group position={[0, 0, -0.05]}>
                {blades.map((rotation, i) => (
                    <IrisBlade key={i} rotation={rotation} isOpen={isOpen} />
                ))}
            </group>
        </group>
    );
}

export function HeroScene({ isClicking }: { isClicking: boolean }) {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none opacity-80">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <CameraIris isClicking={isClicking} />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
