"use client";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import emailjs from "emailjs-com";

export default function AniMap() {
  const [map, setMap] = useState<L.Map | null>(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    // Initialize the map
    const initialMap = L.map("map").setView([20, 0], 2);

    // Load map tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 18,
    }).addTo(initialMap);

    setMap(initialMap);

    return () => {
      initialMap.remove();
    };
  }, []);

  useEffect(() => {
    if (!map) return;

    const places: { name: string; freq: number; coords: [number, number] }[] = [
      { name: "Wildlife Crossing, I-75 Florida, USA", freq: 15, coords: [27.994402, -81.760254] },
      { name: "NH-66, Karnataka, India", freq: 12, coords: [13.0139, 74.7963] },
      { name: "Bruce Highway, Australia", freq: 9, coords: [-19.271, 146.817] },
      { name: "Route 93, Alberta, Canada", freq: 8, coords: [51.1784, -115.5708] },
      { name: "Trans-Canada Highway, Banff, Canada", freq: 7, coords: [51.4968, -115.9281] },
      { name: "Ruta Nacional 40, Argentina", freq: 6, coords: [-32.8575, -69.2239] },
      { name: "E6 Highway, Norway", freq: 5, coords: [68.439, 17.429] },
    ];
    

    places.forEach((place) => {
      L.marker(place.coords, { icon: getAccidentIcon(place.freq) })
        .addTo(map)
        .bindPopup(`<b>${place.name}</b><br>Accidents Reported: ${place.freq}`)
        .on("mouseover", function (this: L.Marker) {
          this.openPopup();
        })
        .on("mouseout", function (this: L.Marker) {
          this.closePopup();
        });
    });
    
  }, [map]);

  const getAccidentIcon = (frequency: number, isNew: boolean = false) => {
    const color = isNew ? "blue" : frequency >= 10 ? "red" : frequency >= 5 ? "yellow" : "green";
    return new L.Icon({
      iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
      shadowSize: [41, 41],
    });
  };

  const reportAccident = async () => {
    if (!location.trim()) {
      alert("Please enter a valid location.");
      return;
    }
    const coords = await getCoordsByPlaceName(location);
    if (coords && map) {
      L.marker(coords, { icon: getAccidentIcon(0, true) })
        .addTo(map)
        .bindPopup(`<b>${location}</b><br>New accident reported here.`)
        .openPopup();
    }
  };

  // const sendEmailAlert = (location: string) => {
  //   const templateParams = {
  //     location,
  //   };

  //   emailjs
  //     .send(
  //       "service_sn218zu", // Replace with your actual service ID
  //       "template_hpfcsqh", // Replace with your actual template ID
  //       templateParams,
  //       "iZPqs97WoabQZdscB" // Replace with your actual public key
  //     )
  //     .then(
  //       (response) => {
  //         console.log("Email sent successfully:", response);
  //         alert("Email sent successfully!");
  //       },
  //       (error) => {
  //         console.error("Failed to send email:", error);
  //         alert("Failed to send email. Please try again.");
  //       }
  //     );
  // };

  const fetchLiveLocation = () => {
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // Fetch address using reverse geocoding
          // const address = await getAddressFromCoordinates(lat, lon);

          L.marker([lat, lon], { icon: getAccidentIcon(0, true) })
            .addTo(map)
            .bindPopup(`<b>Your Location</b><br>New accident reported here.`)
            .openPopup();
          map.setView([lat, lon], 10);

          // Send email with the fetched location address
          // sendEmailAlert(address);
        },
        (error) => {
          alert("Unable to fetch location. Please enable location services.");
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // const getAddressFromCoordinates = async (lat: number, lon: number) => {
  //   try {
  //     const response = await fetch(
  //       `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
  //     );
  //     const data = await response.json();
  //     if (data && data.address) {
  //       const { road, suburb, city, state, country } = data.address;
  //       return `${road || ""}, ${suburb || ""}, ${city || ""}, ${state || ""}, ${country || ""}`.replace(/, ,/g, ",");
  //     } else {
  //       return "Unknown Location";
  //     }
  //   } catch (error) {
  //     console.error("Error fetching address:", error);
  //     return "Unknown Location";
  //   }
  // };

  const getCoordsByPlaceName = async (name: string): Promise<[number, number] | null> => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(name)}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      } else {
        alert("Place not found. Please enter a valid location.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      alert("Unable to fetch location. Try again.");
      return null;
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <Navbar />
      <h1 className="mt-5 mb-5 text-2xl font-bold text-center mb-4 text-green-700">AniMap - Stray Animal Accident Map</h1>
      <div className="flex justify-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter Accident Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded bg-green-200 text-green-700"
        />
        <button onClick={reportAccident} className="p-2 bg-green-500 text-white rounded">
          Report Accident
        </button>
        <button onClick={fetchLiveLocation} className="p-2 bg-yellow-500 text-white rounded">
          Fetch Live Location
        </button>
      </div>
      <div id="map" className="h-96 w-full mb-5  mx-auto border rounded shadow"></div>
      <Footer />
    </div>
  );
}
