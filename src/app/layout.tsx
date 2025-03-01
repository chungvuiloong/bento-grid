import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

const dmSans = localFont({
  src: '../../public/assets/fonts/DMSans-VariableFont_opsz,wght.ttf',
  weight: '400',
  style: 'normal',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MrJays solution to Bento Grid",
  description: "Bento grid. A frontend challenge is perfect for testing CSS Grid and responsive skills with this bento grid layout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
