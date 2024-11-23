"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Globe, Info, Brain, Menu, Map, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white p-4 sticky top-0 z-50 shadow-lg w-100">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <img
            src="/logo 2.png"
            alt="AniSafe Logo"
            className="i-50 rounded-full"
          />
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="hover:bg-green-500 flex items-center px-3 py-2 rounded-md transition duration-300 ease-in-out"
          >
            <Globe className="mr-1" size={20} />
            Home
          </Link>
          <Link
            href="/anidetect"
            className="hover:bg-green-500 flex items-center px-3 py-2 rounded-md transition duration-300 ease-in-out"
          >
            <Brain className="mr-1" size={20} />
            About
          </Link>
          <Link
            href="/iotsim"
            className="hover:bg-green-500 flex items-center px-3 py-2 rounded-md transition duration-300 ease-in-out"
          >
            <Map className="mr-1" size={20} />
            Map
          </Link>
          <Link
            href="/3d-model"
            className="hover:bg-green-500 flex items-center px-3 py-2 rounded-md transition duration-300 ease-in-out"
          >
            <Info className="mr-1" size={20} />
            Information
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 bg-green-800 text-white rounded-lg shadow-md">
          <ul className="space-y-2 p-4">
            <li>
              <Link
                href="/"
                className="block hover:bg-green-600 px-4 py-2 rounded-md transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/anidetect"
                className="block hover:bg-green-600 px-4 py-2 rounded-md transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/iotsim"
                className="block hover:bg-green-600 px-4 py-2 rounded-md transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                Map
              </Link>
            </li>
            <li>
              <Link
                href="/3d-model"
                className="block hover:bg-green-600 px-4 py-2 rounded-md transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                Information
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
