export const Features = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100 flex flex-col">

  
        {/* Main Content */}
        <main className="container mx-auto mt-8 px-4 flex-grow">
  
          {/* Features Section */}
          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Feature Cards */}
              <div className="p-4 bg-green-100 rounded-lg shadow">
                <h3 className="text-xl font-bold text-green-700">AI-Powered Detection</h3>
                <p className="text-gray-700">
                  Utilize AI models to detect animals on roads and enhance driver awareness.
                </p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg shadow">
                <h3 className="text-xl font-bold text-green-700">3D IoT Sensor Model</h3>
                <p className="text-gray-700">
                  Build IoT sensors using ESP32 Cam and IR sensors for animal detection, even at night.
                </p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg shadow">
                <h3 className="text-xl font-bold text-green-700">IoT Sensor Simulation</h3>
                <p className="text-gray-700">
                  Simulate IoT sensors for detecting animals around roads using advanced technology.
                </p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg shadow">
                <h3 className="text-xl font-bold text-green-700">Interactive Quiz</h3>
                <p className="text-gray-700">
                  Educate children and youth on road safety and animal protection through engaging quizzes.
                </p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg shadow">
                <h3 className="text-xl font-bold text-green-700">Accident Hotspot Map</h3>
                <p className="text-gray-700">
                  View a map of high animal accident zones to raise awareness and plan safer routes.
                </p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg shadow">
                <h3 className="text-xl font-bold text-green-700">Live Location & Alerts</h3>
                <p className="text-gray-700">
                  Fetch live locations and report new animal accidents to notify authorities instantly.
                </p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg shadow">
                <h3 className="text-xl font-bold text-green-700">News Feed</h3>
                <p className="text-gray-700">
                  Stay updated with news on road safety and animal accident awareness campaigns.
                </p>
              </div>
            </div>
          </section>
        </main>
  
      </div>
    );
  }
  


  