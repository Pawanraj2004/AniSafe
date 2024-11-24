"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";

interface Article {
  title: string;
  description: string;
  publishedAt: string;
  source: { name: string };
  url: string;
  urlToImage?: string;
}

export default function AnimalSafetyNews() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(6);

  const API_KEY = "d9f841f069bd46c2a9e1ae2ad9057b40";
  const API_URL = `https://newsapi.org/v2/everything?q=animal%20road%20safety&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;

  const fallbackArticles: Article[] = [
    {
      title: "How to Improve Road Safety for Animals",
      description:
        "Learn how to reduce accidents involving animals on roads through better awareness and infrastructure.",
      publishedAt: "2024-11-20",
      source: { name: "SafetyFirst Blog" },
      url: "https://www.safetyfirst.org/animal-road-safety",
      urlToImage: "https://via.placeholder.com/400x200?text=Road+Safety+1",
    },
    {
      title: "Wildlife Crossing Bridges: A Safer Alternative",
      description:
        "Discover how wildlife crossings are helping protect animals and drivers alike.",
      publishedAt: "2024-11-18",
      source: { name: "GreenWay News" },
      url: "https://www.greenway.org/wildlife-crossings",
      urlToImage: "https://via.placeholder.com/400x200?text=Road+Safety+2",
    },
    {
      title: "Tips for Drivers in Animal-Prone Areas",
      description:
        "Driving through areas with high wildlife activity? Here are the top tips to stay safe.",
      publishedAt: "2024-11-15",
      source: { name: "Road Safety Weekly" },
      url: "https://www.roadsafetyweekly.com/tips-for-drivers",
      urlToImage: "https://via.placeholder.com/400x200?text=Road+Safety+3",
    },
  ];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          setArticles(fallbackArticles);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles(fallbackArticles);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [API_URL]);

  const loadMoreArticles = () => {
    const nextIndex = currentIndex + 6;
    setDisplayedArticles(articles.slice(0, nextIndex));
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    setDisplayedArticles(articles.slice(0, 6));
  }, [articles]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#163544] to-[#38ddba]">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <section id="news" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#38ddba]">Animal Road Safety News</h2>
          {loading ? (
            <div className="text-center text-lg text-[#21988b]">Loading news...</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedArticles.map((article, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg">
                    {article.urlToImage && (
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="h-48 w-full object-cover rounded-t-lg"
                      />
                    )}
                    <CardHeader className="bg-[#163544] text-white p-4">
                      <CardTitle className="text-xl font-semibold">{article.title}</CardTitle>
                      <CardDescription className="text-sm text-[#38ddba]">
                        {new Date(article.publishedAt).toLocaleDateString()} - {article.source.name}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-[#21988b] mb-4">
                        {article.description || "No description available."}
                      </p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-4 bg-[#38ddba] text-[#163544] hover:bg-[#21988b] rounded-lg shadow-md transition-colors px-4 py-2 text-center block"
                      >
                        Read More
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button
                  onClick={loadMoreArticles}
                  className="bg-[#38ddba] text-[#163544] hover:bg-[#21988b] rounded-lg px-8 py-2"
                >
                  Load More
                </Button>
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
