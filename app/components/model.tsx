"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";

export const ModelViewer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100">
      <main className="container mx-auto mt-8 px-4">
        <section id="3d-model-viewer" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Interactive 3D Model</CardTitle>
              <CardDescription>Explore the 3D model embedded below</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-[80vh] border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg"
              >
                <iframe
                  src="https://www.tinkercad.com/embed/iD3SnwkItm8?sharecode=Rv4gfurDxWlNm7SBMUFAExHzOm7_BO5xHGAx3Gu_lJg"
                  
                  
                  allowFullScreen
                  title="3D Model Viewer"
                  className="w-full h-full border-none"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
