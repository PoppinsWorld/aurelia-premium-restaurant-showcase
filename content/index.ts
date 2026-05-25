/**
 * AURELIA - Content
 *
 * All textual content for the website.
 * Terminal 3 owns this file.
 */

export const heroContent = {
  badge: "EST. 2024",
  headline: "Where Flavor\nMeets Art",
  subheadline:
    "An immersive culinary journey crafted for those who seek the extraordinary.",
  cta: {
    primary: { label: "Reserve a Table", href: "#contact" },
    secondary: { label: "Explore Menu", href: "#menu" },
  },
};

export const aboutContent = {
  badge: "OUR STORY",
  headline: "Crafted with Passion",
  body: "At AURELIA, every dish tells a story. Our chefs blend time-honored techniques with modern innovation to create an experience that transcends dining.",
  highlights: [
    {
      title: "Seasonal Ingredients",
      description:
        "Locally sourced, peak-season produce forms the foundation of every dish we create.",
    },
    {
      title: "Artisan Technique",
      description:
        "Our culinary team brings decades of combined experience from Michelin-starred kitchens.",
    },
    {
      title: "Thoughtful Pairing",
      description:
        "Every element on the plate is intentionally composed for harmony of flavor and texture.",
    },
  ],
};

export const menuContent = {
  badge: "THE MENU",
  headline: "A Symphony of Flavors",
  subheadline: "Each creation is a masterpiece, meticulously composed.",
  categories: [
    {
      name: "Appetizers",
      description: "Delicate starters to awaken the palate",
      count: 8,
    },
    {
      name: "Main Course",
      description: "Signature entrees crafted with precision",
      count: 12,
    },
    {
      name: "Seafood",
      description: "Ocean-to-table freshness, prepared exquisitely",
      count: 9,
    },
    {
      name: "Pasta",
      description: "Handmade daily with imported Italian flour",
      count: 7,
    },
    {
      name: "Desserts",
      description: "Sweet finales to complete your journey",
      count: 6,
    },
    {
      name: "Drinks",
      description: "Curated cocktails and fine wines",
      count: 15,
    },
  ],
};

export const galleryContent = {
  badge: "THE GALLERY",
  headline: "Visual Poetry",
  subheadline: "Moments captured in our world of culinary art.",
  items: [
    { label: "Signature Plating", aspect: "aspect-[3/4]", image: "/aurelia-premium-restaurant-showcase/images/gourmet-steak.jpeg" },
    { label: "The Kitchen", aspect: "aspect-square", image: "/aurelia-premium-restaurant-showcase/images/michelin-chef.jpeg" },
    { label: "Interior Ambiance", aspect: "aspect-[4/3]", image: "/aurelia-premium-restaurant-showcase/images/cinematic-dining-hall.jpeg" },
    { label: "The Bar", aspect: "aspect-[3/4]", image: "/aurelia-premium-restaurant-showcase/images/luxury-bar.jpeg" },
    { label: "Cocktail Artistry", aspect: "aspect-square", image: "/aurelia-premium-restaurant-showcase/images/premium-cocktail.jpeg" },
    { label: "Dessert Detail", aspect: "aspect-[4/3]", image: "/aurelia-premium-restaurant-showcase/images/luxury-dessert.jpeg" },
  ],
};

export const techStackContent = {
  badge: "POWERED BY",
  headline: "Built with Modern Technology",
  subheadline:
    "Our mobile app leverages the best tools for performance and reliability.",
  items: [
    {
      name: "Flutter",
      description: "Cross-platform UI toolkit for native performance",
    },
    {
      name: "Dart",
      description: "Optimized language for fast, compiled applications",
    },
    {
      name: "Firebase",
      description: "Real-time database, auth, and cloud infrastructure",
    },
    {
      name: "Material Design",
      description: "Google's design system for intuitive interfaces",
    },
    {
      name: "REST API",
      description: "Scalable backend services powering every feature",
    },
    {
      name: "Cloud Functions",
      description: "Serverless compute for secure business logic",
    },
  ],
};

export const performanceContent = {
  badge: "BY THE NUMBERS",
  headline: "Performance That Speaks",
  subheadline:
    "Built for speed, reliability, and scale.",
  stats: [
    { value: 99.9, suffix: "%", label: "Uptime" },
    { value: 2, suffix: "", prefix: "<", unit: "s", label: "Load Time" },
    { value: 4.9, suffix: "★", label: "Rating" },
    { value: 50, suffix: "K+", label: "Downloads" },
  ],
};

export const downloadContent = {
  badge: "MOBILE APP",
  headline: "Take AURELIA With You",
  subheadline:
    "Order, reserve, and explore our menu from anywhere. Available for Android.",
};

export const contactContent = {
  badge: "GET IN TOUCH",
  headline: "Your Table Awaits",
  subheadline: "We'd love to hear from you.",
};
