"use client";

import React, { useState } from "react";
import { Chart, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./aniquiz.css";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";

Chart.register(ArcElement);

const scenarios = [
    {
        title: "Animal Detection",
        description: "What is the most effective way to detect animals on roads at night?",
        options: [
            { text: "Infrared Sensors", img: "https://cdn-icons-png.flaticon.com/512/1076/1076047.png" },
            { text: "Car Headlights", img: "https://cdn-icons-png.flaticon.com/512/3460/3460186.png" },
            { text: "Honking Loudly", img: "https://cdn-icons-png.flaticon.com/512/4072/4072151.png" },
            { text: "Spotting with Binoculars", img: "https://cdn-icons-png.flaticon.com/512/3381/3381417.png" },
        ],
        correctOption: 0,
        feedback: [
            "Correct! Infrared sensors detect heat signatures, making them effective even in low light.",
            "Car headlights are limited in range and effectiveness.",
            "Honking may startle animals but doesn’t reliably detect them.",
            "Binoculars aren't practical for real-time detection on roads.",
        ],
    },
    {
        title: "Driver Alert Systems",
        description: "Which system provides real-time alerts to drivers about animal crossings?",
        options: [
            { text: "Roadside LED Displays", img: "https://cdn-icons-png.flaticon.com/512/2536/2536181.png" },
            { text: "Printed Warning Signs", img: "https://cdn-icons-png.flaticon.com/512/3018/3018560.png" },
            { text: "Smartphone Apps", img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png" },
            { text: "Vehicle Motion Sensors", img: "https://cdn-icons-png.flaticon.com/512/2991/2991108.png" },
        ],
        correctOption: 0,
        feedback: [
            "Correct! LED displays provide dynamic, visible alerts for drivers.",
            "Printed signs are static and don’t adapt to real-time situations.",
            "Smartphone apps are helpful but may distract drivers.",
            "Vehicle motion sensors don’t specifically detect animals.",
        ],
    },
    {
        title: "Animal Movement Management",
        description: "What is a sustainable way to manage stray animal movement near roads?",
        options: [
            { text: "Build Animal Underpasses", img: "https://cdn-icons-png.flaticon.com/512/1048/1048314.png" },
            { text: "Erect Fences", img: "https://cdn-icons-png.flaticon.com/512/188/188422.png" },
            { text: "Chase Animals Away", img: "https://cdn-icons-png.flaticon.com/512/3454/3454252.png" },
            { text: "Relocate Animals", img: "https://cdn-icons-png.flaticon.com/512/1486/1486317.png" },
        ],
        correctOption: 0,
        feedback: [
            "Correct! Underpasses provide a safe way for animals to cross roads.",
            "Fences can block movement but aren't always effective for large areas.",
            "Chasing animals is stressful and ineffective.",
            "Relocation disrupts ecosystems and isn't always feasible.",
        ],
    },
    {
        title: "Wildlife Protection",
        description: "Which of the following helps protect wildlife from road accidents?",
        options: [
            { text: "Animal Bridges", img: "https://cdn-icons-png.flaticon.com/512/2040/2040572.png" },
            { text: "Speed Bumps", img: "https://cdn-icons-png.flaticon.com/512/2492/2492154.png" },
            { text: "Bright Streetlights", img: "https://cdn-icons-png.flaticon.com/512/2920/2920108.png" },
            { text: "Loud Sirens", img: "https://cdn-icons-png.flaticon.com/512/435/435000.png" },
        ],
        correctOption: 0,
        feedback: [
            "Correct! Animal bridges help wildlife cross roads safely.",
            "Speed bumps may slow vehicles but don’t directly protect wildlife.",
            "Bright streetlights can disturb nocturnal animals.",
            "Loud sirens may scare animals but are not effective long-term.",
        ],
    },
    {
        title: "Avoiding Collisions",
        description: "What is the best practice to avoid animal collisions at night?",
        options: [
            { text: "Drive Slowly", img: "https://cdn-icons-png.flaticon.com/512/3238/3238013.png" },
            { text: "Turn Off Lights", img: "https://cdn-icons-png.flaticon.com/512/2907/2907026.png" },
            { text: "Accelerate Quickly", img: "https://cdn-icons-png.flaticon.com/512/1367/1367934.png" },
            { text: "Use High Beams", img: "https://cdn-icons-png.flaticon.com/512/1350/1350175.png" },
        ],
        correctOption: 0,
        feedback: [
            "Correct! Driving slowly gives you time to react to animals on the road.",
            "Turning off lights reduces visibility and is dangerous.",
            "Accelerating increases collision risk.",
            "High beams may startle animals and impair their movement.",
        ],
    },
    {
        title: "Nocturnal Animal Safety",
        description: "What measure is most effective to protect nocturnal animals on highways?",
        options: [
            { text: "Install Wildlife Sensors", img: "https://cdn-icons-png.flaticon.com/512/2964/2964827.png" },
            { text: "Play Loud Music", img: "https://cdn-icons-png.flaticon.com/512/2461/2461283.png" },
            { text: "Turn Off Streetlights", img: "https://cdn-icons-png.flaticon.com/512/3069/3069120.png" },
            { text: "Increase Traffic", img: "https://cdn-icons-png.flaticon.com/512/149/149063.png" },
        ],
        correctOption: 0,
        feedback: [
            "Correct! Wildlife sensors detect animal movement near roads.",
            "Playing loud music can startle and harm animals.",
            "Turning off streetlights increases accident risks.",
            "Increased traffic leads to more potential collisions.",
        ],
    },
    {
        title: "Reflective Collars",
        description: "How do reflective collars on animals help reduce road accidents?",
        options: [
            { text: "Increase Animal Visibility", img: "https://cdn-icons-png.flaticon.com/512/3447/3447798.png" },
            { text: "Decorate Animals", img: "https://cdn-icons-png.flaticon.com/512/1907/1907849.png" },
            { text: "Mark Territory", img: "https://cdn-icons-png.flaticon.com/512/4271/4271228.png" },
            { text: "Repel Predators", img: "https://cdn-icons-png.flaticon.com/512/1715/1715893.png" },
        ],
        correctOption: 0,
        feedback: [
            "Correct! Reflective collars help drivers see animals from a distance.",
            "Collars aren’t for decoration.",
            "They don’t mark territory.",
            "Collars don’t repel predators.",
        ],
    },
    {
        title: "Ecosystem Balance",
        description: "What is an eco-friendly way to maintain wildlife near roads?",
        options: [
            { text: "Wildlife Corridors", img: "https://cdn-icons-png.flaticon.com/512/1470/1470994.png" },
            { text: "Urban Expansion", img: "https://cdn-icons-png.flaticon.com/512/2177/2177944.png" },
            { text: "Deforestation", img: "https://cdn-icons-png.flaticon.com/512/2933/2933768.png" },
            { text: "Hunting Permissions", img: "https://cdn-icons-png.flaticon.com/512/1384/1384038.png" },
        ],
        correctOption: 0,
        feedback: [
            "Correct! Wildlife corridors enable animals to move safely.",
            "Urban expansion disrupts ecosystems.",
            "Deforestation is harmful to wildlife.",
            "Hunting disrupts population balance.",
        ],
    },
    {
        title: "Emergency Response",
        description: "What should you do if you hit an animal on the road?",
        options: [
            { text: "Call Wildlife Rescue", img: "https://cdn-icons-png.flaticon.com/512/3237/3237446.png" },
            { text: "Leave Immediately", img: "https://cdn-icons-png.flaticon.com/512/2961/2961943.png" },
            { text: "Take Animal Home", img: "https://cdn-icons-png.flaticon.com/512/3468/3468502.png" },
            { text: "Ignore the Situation", img: "https://cdn-icons-png.flaticon.com/512/4219/4219523.png" },
        ],
        correctOption: 0,
        feedback: [
            "Correct! Contact wildlife rescue or the appropriate authorities.",
            "Leaving the scene is irresponsible.",
            "Taking the animal home can be unsafe.",
            "Ignoring the situation worsens the impact.",
        ],
    },
    {
        title: "Vehicle Safety Features",
        description: "Which vehicle feature is designed to prevent animal collision?",
        options: [
            { text: "Animal Collision Detector", img: "https://cdn-icons-png.flaticon.com/512/4666/4666361.png" },
            { text: "Rear View Camera", img: "https://cdn-icons-png.flaticon.com/512/2089/2089762.png" },
            { text: "Fog Lights", img: "https://cdn-icons-png.flaticon.com/512/1501/1501570.png" },
            { text: "Turbo Boost", img: "https://cdn-icons-png.flaticon.com/512/1746/1746227.png" },
        ],
        correctOption: 0,
        feedback: [
            "Correct! Animal collision detectors use sensors to identify animals.",
            "Rearview cameras don’t detect animals ahead.",
            "Fog lights improve visibility but don’t detect animals.",
            "Turbo boost increases speed, increasing collision risks.",
        ],
    }
];

const AniQuizPage = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [responses, setResponses] = useState<
    { question: string; yourChoice: string; feedback: string; isCorrect: boolean }[]
  >([]);
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  const handleNextClick = () => {
    if (selectedOption !== null) {
      const isCorrect = selectedOption === scenarios[currentScenario].correctOption;
      const response = {
        question: scenarios[currentScenario].title,
        yourChoice: scenarios[currentScenario].options[selectedOption].text,
        feedback: scenarios[currentScenario].feedback[selectedOption],
        isCorrect,
      };
      setResponses([...responses, response]);
      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(currentScenario + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentScenario(0);
    setSelectedOption(null);
    setResponses([]);
    setShowResults(false);
  };

  const drawPieChart = () => {
    const correctCount = responses.filter((response) => response.isCorrect).length;
    const incorrectCount = responses.length - correctCount;

    return {
      labels: ["Correct", "Incorrect"],
      datasets: [
        {
          data: [correctCount, incorrectCount],
          backgroundColor: ["#38a169", "#e53e3e"],
        },
      ],
    };
  };

  return (
    <div>
        <Navbar />
    <div className="aniquiz-container">
        
      {!showResults ? (
        <div className="quiz-box">
          <h1 className="aniquiz-title">AniQuiz</h1>
          <h2 className="quiz-title">{scenarios[currentScenario].title}</h2>
          <p className="quiz-description">{scenarios[currentScenario].description}</p>
          <div className="options-grid">
            {scenarios[currentScenario].options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`option-card ${
                  selectedOption === index
                    ? index === scenarios[currentScenario].correctOption
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
              >
                <img src={option.img} alt={option.text} className="option-img" />
                <p className="option-text">{option.text}</p>
              </div>
            ))}
          </div>
          {selectedOption !== null && (
            <p className="feedback-text">
              {scenarios[currentScenario].feedback[selectedOption]}
            </p>
          )}
          {selectedOption !== null && (
            <button className="next-button" onClick={handleNextClick}>
              Next
            </button>
          )}
        </div>
      ) : (
        <div className="results-box">
          <h2>Quiz Results</h2>
          <div className="pie-chart">
            <Pie data={drawPieChart()} />
          </div>
          <div className="detailed-feedback">
            {responses.map((response, index) => (
              <div key={index} className="feedback-item">
                <p>
                  <strong>Question:</strong> {response.question}
                </p>
                <p>
                  <strong>Your Choice:</strong> {response.yourChoice}
                </p>
                <p>{response.feedback}</p>
                <p>{response.isCorrect ? "Correct ✅" : "Incorrect ❌"}</p>
                <hr />
              </div>
            ))}
          </div>
          <button className="restart-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
      
    </div>
    <Footer />
    </div>
  );
};

export default AniQuizPage;
