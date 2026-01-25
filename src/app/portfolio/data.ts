export interface Photo {
    id: string;
    src: string;
    alt: string;
    category: string;
    title: string;
}

export const PORTFOLIO_PHOTOS: Photo[] = [
    // Wedding Category (6 images)
    { id: "w1", src: "/assets/IMG_5008.jpeg", alt: "Wedding 1", category: "Wedding", title: "Traditional Ceremony" },
    { id: "w2", src: "/assets/IMG_5013.jpeg", alt: "Wedding 2", category: "Wedding", title: "The Royal Walk" },
    { id: "w3", src: "/assets/IMG_5014.jpeg", alt: "Wedding 3", category: "Wedding", title: "Sacred Vows" },
    { id: "w4", src: "/assets/IMG_7889.jpg", alt: "Wedding 4", category: "Wedding", title: "Golden Celebration" },
    { id: "w5", src: "/assets/IMG_5008.jpeg", alt: "Wedding 5", category: "Wedding", title: "The Joy" },
    { id: "w6", src: "/assets/IMG_5013.jpeg", alt: "Wedding 6", category: "Wedding", title: "Evening Lights" },

    // Fashion Category (6 images)
    { id: "f1", src: "/assets/IMG_5011.jpeg", alt: "Fashion 1", category: "Fashion", title: "High Street Fashion" },
    { id: "f2", src: "/assets/IMG_5009.jpeg", alt: "Fashion 2", category: "Fashion", title: "Editorial Look" },
    { id: "f3", src: "/assets/IMG_5010.jpeg", alt: "Fashion 3", category: "Fashion", title: "Avant Garde" },
    { id: "f4", src: "/assets/IMG_0604.jpeg", alt: "Fashion 4", category: "Fashion", title: "Urban Style" },
    { id: "f5", src: "/assets/IMG_5011.jpeg", alt: "Fashion 5", category: "Fashion", title: "Monochrome Magic" },
    { id: "f6", src: "/assets/IMG_5009.jpeg", alt: "Fashion 6", category: "Fashion", title: "Couture Details" },

    // Portraits Category (6 images)
    { id: "p1", src: "/assets/IMG_5009.jpeg", alt: "Portrait 1", category: "Portraits", title: "Soulful Portrait" },
    { id: "p2", src: "/assets/IMG_5010.jpeg", alt: "Portrait 2", category: "Portraits", title: "Natural Light" },
    { id: "p3", src: "/assets/IMG_5014.jpeg", alt: "Portrait 3", category: "Portraits", title: "Studio Gaze" },
    { id: "p4", src: "/assets/IMG_5013.jpeg", alt: "Portrait 4", category: "Portraits", title: "Expressive Moments" },
    { id: "p5", src: "/assets/IMG_5008.jpeg", alt: "Portrait 5", category: "Portraits", title: "Candid Smile" },
    { id: "p6", src: "/assets/IMG_0604.jpeg", alt: "Portrait 6", category: "Portraits", title: "Focus" },

    // Pre Wedding Category (6 images)
    { id: "pw1", src: "/assets/IMG_5008.jpeg", alt: "Pre Wedding 1", category: "Pre Wedding", title: "Lakeside Romance" },
    { id: "pw2", src: "/assets/IMG_7889.jpg", alt: "Pre Wedding 2", category: "Pre Wedding", title: "Nature's Backdrop" },
    { id: "pw3", src: "/assets/IMG_5011.jpeg", alt: "Pre Wedding 3", category: "Pre Wedding", title: "Modern Love" },
    { id: "pw4", src: "/assets/IMG_5009.jpeg", alt: "Pre Wedding 4", category: "Pre Wedding", title: "Vintage Vibes" },
    { id: "pw5", src: "/assets/IMG_5010.jpeg", alt: "Pre Wedding 5", category: "Pre Wedding", title: "Sunset Story" },
    { id: "pw6", src: "/assets/IMG_5013.jpeg", alt: "Pre Wedding 6", category: "Pre Wedding", title: "Classic Duo" },
];
