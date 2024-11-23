"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Globe, Info, Clock, Brain, Menu, Map, Monitor } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center mr-20">
          <Globe className="mr-2" />
          AniSafe
        </h1>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:underline flex items-center">
            <Globe className="mr-1" size={16} />
            Home
          </Link>
          <Link href="/anidetect" className="hover:underline flex items-center">
            <Brain className="mr-1" size={16} />
            About
          </Link>
          <Link href="/iotsim" className="hover:underline flex items-center">
            <Map className="mr-1" size={16} />
            Map
          </Link>
          <Link href="#information" className="hover:underline flex items-center">
            <Info className="mr-1" size={16} />
            Information
          </Link>
        </nav>
        <Button variant="outline" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};
