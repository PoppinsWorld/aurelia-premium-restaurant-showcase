/**
 * AURELIA - Site Configuration
 *
 * Core site metadata and configuration constants.
 */

export const siteConfig = {
  name: "AURELIA",
  title: "AURELIA | Premium Dining Experience",
  description:
    "Where culinary artistry meets timeless elegance. A premium dining destination offering an unforgettable gastronomic journey.",
  url: "https://aurelia.com",
  ogImage: "/images/og-image.jpg",
  links: {
    instagram: "https://instagram.com/aurelia",
    facebook: "https://facebook.com/aurelia",
    twitter: "https://twitter.com/aurelia",
  },
  contact: {
    phone: "+1 (555) 123-4567",
    email: "hello@aurelia.com",
    address: "123 Luxury Avenue, New York, NY 10001",
  },
  hours: {
    weekday: "5:00 PM - 11:00 PM",
    weekend: "4:00 PM - 12:00 AM",
    brunch: "10:00 AM - 3:00 PM (Sat-Sun)",
  },
} as const;
