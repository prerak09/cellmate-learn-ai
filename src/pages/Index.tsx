
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Search, Book, User } from "lucide-react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIChat from "@/components/AIChat";
import MolecularVisualization from "@/components/MolecularVisualization";
import Contact from "@/components/Contact";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-white/20 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CM</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              CellMate
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">Try CellMate</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <Hero onTryDemo={() => setShowChat(true)} />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <Features />
      </section>

      {/* 3D Demo Section */}
      <section id="demo" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Interactive 3D Biology Lab
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience biology concepts in three dimensions with our interactive molecular visualizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Explore Molecular Structures
              </h3>
              <p className="text-gray-600">
                Interact with 3D models of DNA, proteins, and cellular structures. Rotate, zoom, and examine biological molecules from every angle to understand their form and function.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time molecular dynamics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Interactive learning experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">AI-guided exploration</span>
                </div>
              </div>
            </div>
            
            <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden">
              <MolecularVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              AI Biology Tutor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant answers to your biology questions from our AI-powered tutor
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <AIChat />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CM</span>
                </div>
                <span className="text-xl font-bold">CellMate</span>
              </div>
              <p className="text-white/80">
                Revolutionizing biology education with AI-powered interactive learning experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-white/80">
                <li>AI Biology Tutor</li>
                <li>3D Lab Simulations</li>
                <li>Interactive Learning</li>
                <li>Real-time Feedback</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-white/80">
                Ready to transform your biology learning experience? Get in touch with us today.
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 CellMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
