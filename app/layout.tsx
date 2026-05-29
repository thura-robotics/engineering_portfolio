import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
