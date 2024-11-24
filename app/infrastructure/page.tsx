"use client";

import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { ModelViewer } from "@/app/components/model"

export default function infrastructure() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#163544] to-[#38ddba]">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        {/* First 3D Model Section */}
        <section id="3d-model-viewer" className="mb-16">
          <h2 className="text-4xl font-extrabold text-center text-[#ffffff] mb-6">OverBridge and Sign</h2>
          <ModelViewer />
        </section>

      </main>
      <Footer />
    </div>
  );
}
