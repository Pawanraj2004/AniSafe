"use client";

import { useState, useRef } from "react";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";

import * as tmImage from "@teachablemachine/image";
import "@tensorflow/tfjs";

export default function AniDetect() {
  const [predictions, setPredictions] = useState<string[]>([]);
  const webcamRef = useRef<tmImage.Webcam | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const labelContainerRef = useRef<HTMLDivElement | null>(null);

  const URL = "https://teachablemachine.withgoogle.com/models/jyGBDAltm/";

  const initTeachableMachine = async () => {
    try {
      // Load the model and metadata
      const modelURL = `${URL}model.json`;
      const metadataURL = `${URL}metadata.json`;
      const model = await tmImage.load(modelURL, metadataURL);

      const maxPredictions = model.getTotalClasses();

      // Initialize the webcam
      const webcam = new tmImage.Webcam(320, 240, true);
      await webcam.setup();
      await webcam.play();
      webcamRef.current = webcam;

      // Attach webcam canvas to the container
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // Clear previous content
        containerRef.current.appendChild(webcam.canvas);
      }

      // Prepare label containers
      if (labelContainerRef.current) {
        labelContainerRef.current.innerHTML = ""; // Clear previous labels
        for (let i = 0; i < maxPredictions; i++) {
          const div = document.createElement("div");
          labelContainerRef.current.appendChild(div);
        }
      }

      // Prediction loop
      const predict = async () => {
        if (!webcamRef.current) return;
        webcamRef.current.update(); // Update the webcam frame
        const predictions = await model.predict(webcamRef.current.canvas);
        const predictionTexts = predictions.map(
          (p) => `${p.className}: ${(p.probability * 100).toFixed(2)}%`
        );
        setPredictions(predictionTexts); // Update the state with predictions
      };

      const loop = () => {
        predict();
        requestAnimationFrame(loop); // Continuously predict
      };
      loop();
    } catch (error) {
      console.error("Error initializing Teachable Machine:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <section id="teachable-machine" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Animal Detection</h2>
          <Card>
            <CardHeader>
              <CardTitle>Teachable Machine Integration</CardTitle>
              <CardDescription>Use AI to detect animals</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={initTeachableMachine}>Start Detection</Button>
              <div
                ref={containerRef}
                id="webcam-container"
                className="mt-4 border rounded-lg overflow-hidden"
              ></div>
              <div
                ref={labelContainerRef}
                id="label-container"
                className="mt-4 text-gray-700"
              >
                {predictions.map((p, index) => (
                  <div key={index} className="p-2 bg-gray-100 rounded mb-2">
                    {p}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
