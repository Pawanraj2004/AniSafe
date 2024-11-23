"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Globe, Info, Brain, Menu, Map, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white p-4 sticky top-0 z-50 shadow-md transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <h1 className="flex items-center space-x-2">
          <img
            src="/logo 2.png"
            alt="AniSafe Logo"
            className="i-50 border-white"
          />
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/" icon={<Globe size={20} />} text="Home" />
          <NavLink href="/aniquiz" icon={<Brain size={20} />} text="About" />
          <NavLink href="/iotsim" icon={<Map size={20} />} text="Map" />
          <NavLink href="/3d-model" icon={<Info size={20} />} text="Information" />
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 bg-green-800 text-white rounded-lg shadow-lg">
          <ul className="space-y-2 p-4">
            <MobileNavLink
              href="/"
              text="Home"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/anidetect"
              text="About"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/iotsim"
              text="Map"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/3d-model"
              text="Information"
              onClick={() => setIsMenuOpen(false)}
            />
          </ul>
        </nav>
      )}
    </header>
  );
};

// Reusable NavLink Component for Desktop
const NavLink = ({ href, icon, text }) => (
  <Link href={href} legacyBehavior>
    <a className="flex items-center space-x-1 px-4 py-2 hover:bg-green-600 rounded-lg transition-all duration-300 ease-in-out">
      {icon}
      <span>{text}</span>
    </a>
  </Link>
);

// Reusable NavLink Component for Mobile
const MobileNavLink = ({ href, text, onClick }) => (
  <li>
    <Link href={href} legacyBehavior>
      <a
        className="block hover:bg-green-600 px-4 py-2 rounded-md transition-all duration-300"
        onClick={onClick}
      >
        {text}
      </a>
    </Link>
  </li>
);
