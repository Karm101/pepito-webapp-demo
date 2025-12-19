import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Import the Navbar component
import Navbar from "./components/NavBar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mark's Tutorials",
  description: "A blog about Tailwind and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 2. Add the Navbar here, above the children */}
        <Navbar />
        
        {/* This renders the page content (Home, About, etc.) */}
        {children}
      </body>
    </html>
  );
}