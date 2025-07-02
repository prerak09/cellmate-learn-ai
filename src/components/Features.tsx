
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Search, Book } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language AI Tutor",
      description: "Ask questions in plain English and get detailed explanations tailored to your learning level. Our AI understands context and provides step-by-step guidance through complex biological processes.",
      benefits: ["24/7 availability", "Personalized explanations", "Interactive Q&A", "Progress tracking"]
    },
    {
      icon: Search,
      title: "3D Virtual Lab Simulations",
      description: "Experience realistic biology lab experiments in a safe, virtual environment. From microscopy to DNA extraction, perform hands-on experiments with detailed AI guidance.",
      benefits: ["Safe experimentation", "Unlimited resources", "Real-time feedback", "Guided procedures"]
    },
    {
      icon: Book,
      title: "Textbook-to-Simulation Engine",
      description: "Transform static textbook content into dynamic, interactive visualizations. Watch cellular processes come to life with scientifically accurate animations and simulations.",
      benefits: ["Visual learning", "Dynamic content", "Scientific accuracy", "Concept reinforcement"]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Revolutionary Learning
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
            Features
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how CellMate transforms traditional biology education into an interactive, 
          AI-powered learning experience that adapts to your pace and style.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-base mb-6 leading-relaxed">
                {feature.description}
              </CardDescription>
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Feature Highlights */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose CellMate?
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Our platform combines cutting-edge AI technology with proven educational methodologies 
              to create an unparalleled learning experience that makes biology accessible, engaging, and fun.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
                <div className="text-gray-600 text-sm">Student Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">40%</div>
                <div className="text-gray-600 text-sm">Improved Grades</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                <div className="text-gray-600 text-sm">AI Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">50+</div>
                <div className="text-gray-600 text-sm">Lab Simulations</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🎓</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Join 10,000+ Students
            </h4>
            <p className="text-gray-600">
              Already transforming their biology education with CellMate's AI-powered learning platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
