export const Features = () => {
  return (
    <div className="bg-gradient-to-b from-[#21988b] to-[#38ddba] text-white py-12">
      <section className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Detection",
              description: "Utilize AI models to detect animals on roads and enhance driver awareness.",
            },
            {
              title: "IoT Sensor Simulation",
              description: "Simulate IoT sensors for detecting animals around roads using advanced technology.",
            },
            {
              title: "Infrastructure",
              description: "3d model of infrastructure showcasing the use of OverBridge and use of speed breakers near animal sightings",
            },
            {
              title: "Accident Hotspot Map with Live Location & Alerts",
              description: "View a map of high animal accident zones to raise awareness and plan safer routes + Fetch live locations and report new animal accidents to notify authorities instantly.",
            },
            {
              title: "Interactive Quiz",
              description: "Educate children and youth on road safety and animal protection through engaging quizzes.",
            },
            {
              title: "News Feed",
              description: "Stay updated with news on road safety and animal accident awareness campaigns.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#163544] rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold text-[#38ddba] mb-4">{feature.title}</h3>
              <p className="text-sm text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
