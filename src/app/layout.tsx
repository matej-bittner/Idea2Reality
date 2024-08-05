import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idea2Reality",
  description:
    "Turning your idea into Reality. We bring together the teams form the global tech industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden overflow-y-auto bg-gray-900 text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
