import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollReveal } from "../components/ScrollReveal";
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
  title: "BVU | Business Visual Upgrade",
  description: "Professional visual communication for Nigerian businesses without the traditional agency cost or unreliable freelance experience.",
};

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
