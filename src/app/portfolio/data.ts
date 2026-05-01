export interface Photo {
    id: string;
    src: string;
    alt: string;
    category: string;
    title: string;
}

export const PORTFOLIO_PHOTOS: Photo[] = [
    // Wedding Category (9 images)
    { id: "w1", src: "/assets/SBMS0083.jpg", alt: "Wedding 1", category: "Wedding", title: "Eternal Bond" },
    { id: "w2", src: "/assets/SBMS0521.jpg", alt: "Wedding 2", category: "Wedding", title: "Shared Dreams" },
    { id: "w3", src: "/assets/SBMS0908.jpg", alt: "Wedding 3", category: "Wedding", title: "Morning Glow" },
    { id: "w4", src: "/assets/SBMS0939.jpg", alt: "Wedding 4", category: "Wedding", title: "Enchanted Moments" },
    { id: "w5", src: "/assets/SBMS0976.jpg", alt: "Wedding 5", category: "Wedding", title: "Sunset Love" },
    { id: "w6", src: "/assets/SBMS1056.jpg", alt: "Wedding 6", category: "Wedding", title: "Park Walk" },
    { id: "w7", src: "/assets/SBMS1252.jpg", alt: "Wedding 7", category: "Wedding", title: "Love's Light" },
    { id: "w8", src: "/assets/SBMS1410.jpg", alt: "Wedding 8", category: "Wedding", title: "Golden Hour" },
    { id: "w9", src: "/assets/SBMS1451.jpg", alt: "Wedding 9", category: "Wedding", title: "Forever Yours" },

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

    // Pre Wedding Category (13 images)
    { id: "pw1", src: "/assets/SBMS0083.jpg", alt: "Pre Wedding 1", category: "Pre Wedding", title: "Eternal Bond" },
    { id: "pw2", src: "/assets/SBMS0521.jpg", alt: "Pre Wedding 2", category: "Pre Wedding", title: "Shared Dreams" },
    { id: "pw3", src: "/assets/SBMS0908.jpg", alt: "Pre Wedding 3", category: "Pre Wedding", title: "Morning Glow" },
    { id: "pw4", src: "/assets/SBMS0939.jpg", alt: "Pre Wedding 4", category: "Pre Wedding", title: "Enchanted Moments" },
    { id: "pw5", src: "/assets/SBMS0976.jpg", alt: "Pre Wedding 5", category: "Pre Wedding", title: "Sunset Love" },
    { id: "pw6", src: "/assets/SBMS1056.jpg", alt: "Pre Wedding 6", category: "Pre Wedding", title: "Park Walk" },
    { id: "pw11", src: "/assets/SBMS1252.jpg", alt: "Pre Wedding 11", category: "Pre Wedding", title: "Love's Light" },
    { id: "pw12", src: "/assets/SBMS1410.jpg", alt: "Pre Wedding 12", category: "Pre Wedding", title: "Golden Hour" },
    { id: "pw13", src: "/assets/SBMS1451.jpg", alt: "Pre Wedding 13", category: "Pre Wedding", title: "Forever Yours" },
];
