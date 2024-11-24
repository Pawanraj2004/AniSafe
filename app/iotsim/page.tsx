"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ModelViewer } from "@/app/components/model";

export default function IotSim() {
  

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
    <div className="min-h-screen bg-gradient-to-b from-[#163544] to-[#38ddba]">
      <Navbar />
      {/* Main Content */}
      <main className="container mx-auto mt-8 px-4">
        {/* IoT Simulation Section */}
        <section id="information" className="mb-16">
          <h2 className="text-4xl font-extrabold text-center text-[#ffffff] mb-6">AniSense</h2>
          <Card className="bg-[#38ddba] border-none shadow-lg hover:bg-[#21988b] transition-all duration-300 ease-in-out">
            <CardHeader className="bg-[#163544] text-white">
              <CardTitle className="text-xl font-semibold">IoT Simulation</CardTitle>
              <CardDescription className="text-[#21988b]">A simulation for sensing animals nearby</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[600px] mt-4 border-2 border-[#21988b] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://wokwi.com/projects/415275384269005825"
                  width="100%"
                  height="100%"
                  className="border-none"
                  title="Wokwi IoT Simulation"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
