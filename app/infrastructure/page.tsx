"use client";

import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";

export default function ModelViewer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#163544] to-[#38ddba]">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        {/* First 3D Model Section */}
        <section id="3d-model-viewer" className="mb-16">
          <h2 className="text-4xl font-extrabold text-center text-[#163544] mb-6">OverBridge</h2>
          <Card className="shadow-lg border-none bg-[#38ddba] hover:bg-[#21988b] transition-all duration-300 ease-in-out">
            <CardHeader className="bg-[#163544] text-white">
              <CardTitle className="text-xl font-semibold">Over Bridge</CardTitle>
              <CardDescription className="text-[#21988b]">Passage for animals</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-[80vh] border-2 border-[#21988b] rounded-lg overflow-hidden shadow-lg"
              >
                <iframe
                  src="https://www.tinkercad.com/things/bcwb1iuZSKJ-epic-kieran?sharecode=qvzVcf6ez5mistNWXI1-14rZ83SICoRX6PSWNWQcd8Y"
                  allowFullScreen
                  title="3D Model Viewer"
                  className="w-full h-full border-none"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Second 3D Model Section */}
        <section id="3d-model-viewer" className="mb-16">
          <h2 className="text-4xl font-extrabold text-center text-[#163544] mb-6">Road Sign</h2>
          <Card className="shadow-lg border-none bg-[#38ddba] hover:bg-[#21988b] transition-all duration-300 ease-in-out">
            <CardHeader className="bg-[#163544] text-white">
              <CardTitle className="text-xl font-semibold">Road Sign boards</CardTitle>
              <CardDescription className="text-[#21988b]">Boards for animal crossing</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-[80vh] border-2 border-[#21988b] rounded-lg overflow-hidden shadow-lg"
              >
                <iframe
                  src="https://www.tinkercad.com/embed/6LynYRXbA4w-road-sign?sharecode=3V31fMF06shY_H3eetBavExXBPdQJTikn5m8qFBiJdg"
                  allowFullScreen
                  title="3D Model Viewer"
                  className="w-full h-full border-none"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
