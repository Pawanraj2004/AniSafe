'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Info, Clock, Brain, Menu, ChevronDown, Map } from 'lucide-react'

export function AniSafe() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault()
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (targetId) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', smoothScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100">
      <header className="bg-green-700 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Globe className="mr-2" />
            AniSafe
          </h1>
          <nav className="hidden md:flex space-x-4">
            <Link href="#" className="hover:underline flex items-center">
              <Globe className="mr-1" size={16} />
              Home
            </Link>
            <Link href="#" className="hover:underline flex items-center">
              <Brain className="mr-1" size={16} />
              About
            </Link>
            <Link href="#interactive-map" className="hover:underline flex items-center">
              <Map className="mr-1" size={16} />
              Map
            </Link>
            <Link href="#information" className="hover:underline flex items-center">
              <Info className="mr-1" size={16} />
              Information
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col space-y-2 md:hidden">
            <Link href="#" className="hover:underline flex items-center">
              <Globe className="mr-1" size={16} />
              Home
            </Link>
            <Link href="#" className="hover:underline flex items-center">
              <Brain className="mr-1" size={16} />
              About
            </Link>
            <Link href="#interactive-map" className="hover:underline flex items-center">
              <Map className="mr-1" size={16} />
              Map
            </Link>
            <Link href="#information" className="hover:underline flex items-center">
              <Info className="mr-1" size={16} />
              Information
            </Link>
          </nav>
        )}
      </header>

      <main className="container mx-auto mt-8 px-4">
      <section id="hero" className="text-center mb-16 relative">
        <div className="sketchfab-embed-wrapper mx-auto rounded-lg shadow-lg mb-8">
        <iframe title="Earth" src="https://sketchfab.com/models/41fc80d85dfd480281f21b74b2de2faa/embed"
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          className="w-full h-[400px]"
    ></iframe>
  </div>
  <h2 className="text-4xl font-bold mb-4">Welcome to AniSafe</h2>
  <p className="text-xl mb-8">
    Road Safety Webpage for Stray Animals.
  </p>
  <Button size="lg">Get Started</Button>
  <ChevronDown className="animate-bounce mt-8 mx-auto" size={32} />
</section>


        <section id="eyes-on-earth" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">AniDetect</h2>
          <Card>
            <CardHeader>
              <CardTitle>Animal Detection</CardTitle>
              <CardDescription>Detects animals' presence on roads</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section id="information" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">AniSense</h2>
            <Card>
    <CardHeader>
      <CardTitle>IoT simulation</CardTitle>
      <CardDescription>A iot simulation for sensing animals nearby</CardDescription>
    </CardHeader>
    <CardContent>
      <iframe
        src="https://wokwi.com/projects/415275384269005825"
        width="100%"
        height="600"
        className="mt-4 border rounded-lg"
        style={{ border: "1px solid #ccc" }}
        title="Wokwi IoT Simulation"
        allowFullScreen
      ></iframe>
    </CardContent>
  </Card>
</section>
      </main>

      <footer className="bg-green-700 text-white p-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AniSafe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}