"use client";

import React from "react";
import { Navbar } from "@/app/components/navbar"; // Assuming Navbar component is in the components folder
import { Footer } from "@/app/components/footer"; // Assuming Footer component is in the components folder

const AboutPage = () => {
  return (
    <div className="bg-[#f5f7f9] text-[#163544] min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#163544] mb-4">
            About AniSafe
          </h1>
          <p className="text-lg text-gray-600">
            AniSafe is committed to ensuring the safety of animals on roads using cutting-edge technology and innovative solutions.
          </p>
        </div>

        {/* Platform Description */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#38ddba] mb-6">Our Mission</h2>
          <p className="text-gray-700">
            AniSafe aims to enhance road safety and protect wildlife by providing AI-based animal detection on roads, 
            IoT sensor models for real-time alerts, and educational content for all ages.
          </p>
        </section>

        {/* Features Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#38ddba] mb-6">How We Protect Animals</h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#21988b] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">AI</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#163544]">AI-Powered Detection</h3>
                <p className="text-gray-700">
                  Our AI model detects animals on the road, allowing drivers to be more aware and avoid accidents.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#21988b] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">3D</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#163544]">3D IoT Sensor Model</h3>
                <p className="text-gray-700">
                  We have designed a 3D IoT sensor model that can be built using ESP32 Cam and IR sensors to detect animals at night.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#21988b] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">Map</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#163544]">Accident Hotspot Map</h3>
                <p className="text-gray-700">
                  View accident-prone areas and raise awareness about animal-related accidents through an interactive map.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#21988b] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">Alert</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#163544]">Live Location & Alerts</h3>
                <p className="text-gray-700">
                  AniSafe allows users to send live location data and alerts for new animal accidents directly to authorities.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#21988b] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">Quiz</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#163544]">Road Safety Quiz</h3>
                <p className="text-gray-700">
                  Engage children and youth in road safety awareness and animal protection through our interactive quiz.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
