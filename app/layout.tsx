import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar, Footer, SmoothScroll } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AURELIA | Premium Dining Experience",
    template: "%s | AURELIA",
  },
  description:
    "AURELIA - Where culinary artistry meets timeless elegance. A premium dining destination offering an unforgettable gastronomic journey.",
  keywords: [
    "AURELIA",
    "fine dining",
    "premium restaurant",
    "gourmet",
    "culinary experience",
  ],
  authors: [{ name: "AURELIA" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AURELIA",
    title: "AURELIA | Premium Dining Experience",
    description:
      "Where culinary artistry meets timeless elegance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
