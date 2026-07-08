export interface Photo {
    id: string;
    src: string;
    alt: string;
    category: string;
    title: string;
}

export const PORTFOLIO_PHOTOS: Photo[] = [
    // Wedding Category (7 images)
    { id: "w1", src: "/assets/SBMS1064.jpg", alt: "Wedding 1", category: "Wedding", title: "Graceful Moments" },
    { id: "w2", src: "/assets/SBMS1128 2.jpg", alt: "Wedding 2", category: "Wedding", title: "Royal Celebration" },
    { id: "w3", src: "/assets/SBMS1103.jpg", alt: "Wedding 3", category: "Wedding", title: "Traditional Joy" },
    { id: "w4", src: "/assets/SBMS1895.jpg", alt: "Wedding 4", category: "Wedding", title: "Eternal Love" },
    { id: "w5", src: "/assets/SBMS1908.jpg", alt: "Wedding 5", category: "Wedding", title: "Sunset Vows" },
    { id: "w6", src: "/assets/SBMS1942.jpg", alt: "Wedding 6", category: "Wedding", title: "Shared Path" },


    // Fashion Category (6 images)
    { id: "f1", src: "/assets/Fashion 2.jpg", alt: "Fashion 2", category: "Fashion", title: "Warm Radiance" },
    { id: "f2", src: "/assets/Fashion 3.jpg", alt: "Fashion 3", category: "Fashion", title: "Vintage Grandeur" },
    { id: "f3", src: "/assets/Fashion 4.jpg", alt: "Fashion 4", category: "Fashion", title: "Noir Silhouette" },
    { id: "f4", src: "/assets/Fashion 5.jpg", alt: "Fashion 5", category: "Fashion", title: "Scarlet Lounge" },
    { id: "f5", src: "/assets/Fashion 6.jpg", alt: "Fashion 6", category: "Fashion", title: "Elegance in Profile" },
    { id: "f6", src: "/assets/Fashion 7.jpg", alt: "Fashion 7", category: "Fashion", title: "Ruby Radiance" },

    // Architecture Category (9 images)
    { id: "a1", src: "/assets/Arch 1.jpg", alt: "Architecture 1", category: "Architecture", title: "Modern Lines" },
    { id: "a2", src: "/assets/Arch 2.jpg", alt: "Architecture 2", category: "Architecture", title: "Urban Structure" },
    { id: "a3", src: "/assets/Arch 3.jpg", alt: "Architecture 3", category: "Architecture", title: "Geometric Harmony" },
    { id: "a4", src: "/assets/Arch 4.jpg", alt: "Architecture 4", category: "Architecture", title: "Shadow & Stone" },
    { id: "a5", src: "/assets/Arch 5.jpg", alt: "Architecture 5", category: "Architecture", title: "Glass Reflection" },
    { id: "a6", src: "/assets/Arch 6.jpg", alt: "Architecture 6", category: "Architecture", title: "Symmetrical Perspective" },
    { id: "a7", src: "/assets/Arch 7.jpg", alt: "Architecture 7", category: "Architecture", title: "Minimalist Facade" },
    { id: "a8", src: "/assets/Arch 8.JPG", alt: "Architecture 8", category: "Architecture", title: "Concrete Monolith" },
    { id: "a9", src: "/assets/Arch 9.JPG", alt: "Architecture 9", category: "Architecture", title: "Contemporary Design" },

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

    // Food Category (9 images)
    { id: "fd1", src: "/assets/Food 1.jpg", alt: "Food 1", category: "Food", title: "Culinary Art" },
    { id: "fd2", src: "/assets/Food 2.jpg", alt: "Food 2", category: "Food", title: "Gourmet Dish" },
    { id: "fd3", src: "/assets/Food 3.jpg", alt: "Food 3", category: "Food", title: "Fresh Ingredients" },
    { id: "fd4", src: "/assets/Food 4.jpg", alt: "Food 4", category: "Food", title: "Sweet Delights" },
    { id: "fd5", src: "/assets/Food 5.jpg", alt: "Food 5", category: "Food", title: "Artisanal Feast" },
    { id: "fd6", src: "/assets/Food 6.jpg", alt: "Food 6", category: "Food", title: "Delectable Bites" },
    { id: "fd7", src: "/assets/Food 7.jpg", alt: "Food 7", category: "Food", title: "Signature Platter" },
    { id: "fd8", src: "/assets/Food 8.jpg", alt: "Food 8", category: "Food", title: "Warm Hospitality" },
    { id: "fd9", src: "/assets/Food 9.jpg", alt: "Food 9", category: "Food", title: "Modern Culinary" },

    // Child Category (6 images)
    { id: "c1", src: "/assets/Child 1.jpg", alt: "Child 1", category: "Child", title: "Innocent Smile" },
    { id: "c2", src: "/assets/Child 2.jpg", alt: "Child 2", category: "Child", title: "Playful Moments" },
    { id: "c3", src: "/assets/Child 3.jpg", alt: "Child 3", category: "Child", title: "Wonder Eyes" },
    { id: "c4", src: "/assets/Child 4.jpg", alt: "Child 4", category: "Child", title: "Joyful Gaze" },
    { id: "c5", src: "/assets/Child 5.jpg", alt: "Child 5", category: "Child", title: "Sweet Childhood" },
    { id: "c6", src: "/assets/Child 6.jpg", alt: "Child 6", category: "Child", title: "Dreamy Childhood" },
];
