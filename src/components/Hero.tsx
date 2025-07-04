import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onTryDemo: () => void;
}

const Hero = ({ onTryDemo }: HeroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 font-medium">AI-Powered Biology Learning Platform</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Meet Your AI
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent block">
              Biology Lab Partner
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your biology education with interactive 3D simulations, intelligent AI tutoring, 
            and immersive virtual lab experiences that make complex concepts crystal clear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={onTryDemo}
            >
              Try CellMate Free
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-2xl">🧬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Biology Tutor</h3>
              <p className="text-gray-600">Get instant answers to complex biology questions with our intelligent AI assistant</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3D Lab Simulations</h3>
              <p className="text-gray-600">Explore virtual biology labs with realistic 3D simulations and experiments</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Learning</h3>
              <p className="text-gray-600">Transform textbook content into engaging visual experiences and simulations</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
