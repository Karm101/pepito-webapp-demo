"use client"; // This is required for the "Active" logic to work
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // This tells us which page we are currently on

  // Helper function to check if a link is active
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <span className="font-bold text-xl tracking-tight">Mark's Tutorials</span>
          </div>

          {/* Menu Items (The Bluestrap Look) */}
          <div className="hidden md:flex space-x-4">
            
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                isActive("/") ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Home
            </Link>

            <Link 
              href="/tutorials" 
              className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                isActive("/tutorials") ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Tutorials
            </Link>

            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                isActive("/about") ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              About Me
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}