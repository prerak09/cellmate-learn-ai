import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting CellMate. We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  return <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to revolutionize your biology education? Contact us to learn more about CellMate
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Let's Transform Biology Education Together
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you're an educator looking to enhance your curriculum, a student seeking better learning tools, 
              or an institution interested in implementing AI-powered biology education, we're here to help.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Email Support</h4>
                <p className="text-gray-600">preraktanwar123@gmail.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Live Chat</h4>
                <p className="text-gray-600">Available Monday-Friday</p>
                <p className="text-sm text-gray-500">9 AM - 6 PM EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Demo Request</h4>
                <p className="text-gray-600">Schedule a personalized demo</p>
                <p className="text-sm text-gray-500">Perfect for institutions</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6">
            <h4 className="font-semibold text-gray-800 mb-2">🚀 Beta Program</h4>
            <p className="text-gray-600 text-sm">
              Join our beta program and get early access to new features, provide feedback, 
              and help shape the future of AI-powered biology education.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="w-full" placeholder="Enter your full name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full" placeholder="Enter your email address" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required className="w-full" placeholder="What's this about?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="w-full h-32" placeholder="Tell us more about your needs..." />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Contact;