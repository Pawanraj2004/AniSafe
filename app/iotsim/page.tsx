"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Menu } from "lucide-react";

export default function IotSim() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    return () => {
      anchorLinks.forEach((link) => link.removeEventListener("click", handleSmoothScroll));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100">
      {/* Header Section */}
      <header className="bg-green-700 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Navbar />
          <Button variant="outline" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 px-4">
        {/* IoT Simulation Section */}
        <section id="information" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">AniSense</h2>
          <Card>
            <CardHeader>
              <CardTitle>IoT Simulation</CardTitle>
              <CardDescription>A simulation for sensing animals nearby</CardDescription>
            </CardHeader>
            <CardContent>
              <iframe
                src="https://wokwi.com/projects/415275384269005825"
                width="100%"
                height="600"
                className="mt-4 border rounded-lg"
                style={{ border: "1px solid #ccc" }}
                title="Wokwi IoT Simulation"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
