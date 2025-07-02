import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, User, Search } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI Biology Tutor. Ask me anything about biology - from basic cell structure to complex genetic processes. How can I help you learn today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const genAI = new GoogleGenerativeAI("AIzaSyCjw9xtAgkrfdMsqU8bAnHV-JugR2cgIUc");

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const biologyPrompt = `You are CellMate, an expert AI biology tutor. Your goal is to help students understand biology concepts clearly and engagingly. 
      
      Guidelines:
      - Provide clear, accurate explanations appropriate for high school to college level biology
      - Use analogies and examples to make complex concepts understandable
      - Break down complex processes into step-by-step explanations
      - Encourage curiosity and deeper learning
      - If asked about non-biology topics, gently redirect to biology-related aspects
      - Be encouraging and supportive in your teaching approach
      
      Student question: ${inputText}`;

      const result = await model.generateContent(biologyPrompt);
      const response = await result.response;
      const text = response.text();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: text,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble connecting right now. Please try again in a moment!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "What is the difference between mitosis and meiosis?",
    "How does photosynthesis work?",
    "Explain the structure of DNA",
    "What happens during cellular respiration?"
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl border-0">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-2 text-2xl">
          <MessageSquare className="w-6 h-6" />
          <span>CellMate AI Biology Tutor</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isUser 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                }`}>
                  {message.isUser ? <User className="w-4 h-4" /> : <span className="text-sm font-bold">AI</span>}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.isUser 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  <div className={`text-xs mt-2 opacity-70 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white flex items-center justify-center">
                  <span className="text-sm font-bold">AI</span>
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="px-6 pb-4">
            <p className="text-sm text-gray-600 mb-3">Try asking about:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-left justify-start h-auto py-2 px-3 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  onClick={() => setInputText(question)}
                >
                  <Search className="w-3 h-3 mr-2 flex-shrink-0" />
                  <span className="text-xs">{question}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t bg-gray-50 p-4 rounded-b-lg">
          <div className="flex space-x-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about biology..."
              className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              disabled={isLoading}
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6"
            >
              Send
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Press Enter to send • Ask about cell biology, genetics, ecology, and more!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIChat;
