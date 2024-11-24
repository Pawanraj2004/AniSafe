'use client';

import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { useEffect } from "react";
import { Features } from "@/app/components/features";

export default function AniSafe() {
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
    links.forEach((link) => link.addEventListener("click", smoothScroll));

    return () => links.forEach((link) => link.removeEventListener("click", smoothScroll));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#163544] to-[#21988b] text-white">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-5xl font-bold text-center mb-6">Welcome to AniSafe</h1>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Protecting wildlife with AI and IoT technologies for a safer environment.
        </p>
        <Features />
      </main>
      <Footer />
    </div>
  );
}
