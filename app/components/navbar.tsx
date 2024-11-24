"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Globe, Info, Brain, Menu, Map, X } from "lucide-react";

// Navbar component
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#163544] text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center space-x-3 text-2xl font-bold hover:text-[#38ddba] transition-colors">
            <img
              src="/logo.png"
              alt="AniSafe Logo"
              className="i-50"
            />
            <span>AniSafe</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/" icon={<Globe size={20} />} text="Home" />
          <NavLink href="/about" icon={<Globe size={20} />} text="About" />
          <NavLink href="/anidetect" icon={<Map size={20} />} text="Detection" />
          <NavLink href="/iotsim" icon={<Globe size={20} />} text="IoT Simulation" />
          <NavLink href="/infrastructure" icon={<Info size={20} />} text="Infrastructure" />
          <NavLink href="/animap" icon={<Map size={20} />} text="Map" />
          <NavLink href="/aniquiz" icon={<Brain size={20} />} text="Quiz" />
          <NavLink href="/aninews" icon={<Info size={20} />} text="News" />
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-white hover:text-[#38ddba]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 bg-[#21988b] text-white rounded-lg shadow-lg">
          <ul className="space-y-2 p-4">
            <MobileNavLink
              href="/"
              text="Home"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/about"
              text="About"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/anidetect"
              text="Detection"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/iotsim"
              text="IoT Simulation"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/infrastructure"
              text="Infrastructure"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/animap"
              text="Map"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/aniquiz"
              text="Quiz"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/aninews"
              text="News"
              onClick={() => setIsMenuOpen(false)}
            />
          </ul>
        </nav>
      )}
    </header>
  );
};

// Reusable NavLink Component for Desktop
type NavLinkProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

const NavLink = ({ href, icon, text }: NavLinkProps) => (
  <Link href={href} legacyBehavior>
    <a className="flex items-center space-x-1 px-4 py-2 hover:bg-[#38ddba] hover:text-[#163544] rounded-lg transition-all duration-300 ease-in-out">
      {icon}
      <span>{text}</span>
    </a>
  </Link>
);

// Reusable NavLink Component for Mobile
type MobileNavLinkProps = {
  href: string;
  text: string;
  onClick: () => void;
};

const MobileNavLink = ({ href, text, onClick }: MobileNavLinkProps) => (
  <li>
    <Link href={href} legacyBehavior>
      <a
        className="block hover:bg-[#38ddba] px-4 py-2 rounded-md transition-all duration-300"
        onClick={onClick}
      >
        {text}
      </a>
    </Link>
  </li>
);
