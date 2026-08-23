import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollReveal } from "../components/ScrollReveal";
import "./globals.css";

// Geist Sans — primary typeface for UI and body text
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Mono — used for code, labels, and monospaced elements
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Root metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "BVU | Business Visual Upgrade",
  description: "Professional visual communication for Nigerian businesses without the traditional agency cost or unreliable freelance experience.",
};

// Root layout wraps all pages with fonts, global styles, and scroll-reveal observer
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<ScrollReveal /></body>
    </html>
  );
}
