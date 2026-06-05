import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import ImageProtect from "@/components/ImageProtect";

// Body font — crisp and highly legible
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Display/heading font — Space Grotesk: clean, modern, lightly technical
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  title: "Thura Zaw — Robotic & AI Engineer",
  description:
    "Portfolio of Thura Zaw — Robotics and AI Engineer specialising in ROS2, embedded systems, PCB design, and computer vision.",
  keywords: ["robotics", "AI engineer", "ROS2", "PCB design", "computer vision", "KMITL", "embedded systems"],
  authors: [{ name: "Thura Zaw" }],
  openGraph: {
    title: "Thura Zaw — Robotic & AI Engineer",
    description: "Portfolio of Thura Zaw — Robotics and AI Engineer",
    type: "website",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ImageProtect />
        {children}
      </body>
    </html>
  );
}
