'use client';

import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Menu } from "lucide-react";

export default function AniSafe() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100">
      <header className="bg-green-700 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Navbar />
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to AniSafe</h1>
        <p className="text-center text-lg">
          Protecting wildlife with AI and IoT technologies.
        </p>
      </main>

      <Footer />
    </div>
  );
}
