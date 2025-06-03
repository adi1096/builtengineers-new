import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calculator, CheckCircle, ChartGantt, FileText, Shield, Cloud, ArrowLeft } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface BuiltSuiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  showLogin: boolean;
  onShowLogin: () => void;
  onHideLogin: () => void;
}

export default function BuiltSuiteModal({ 
  isOpen, 
  onClose, 
  showLogin, 
  onShowLogin, 
  onHideLogin 
}: BuiltSuiteModalProps) {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const { toast } = useToast();

  const loginMutation = useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      const response = await apiRequest("POST", "/api/login", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Login successful!",
        description: "Welcome to Built Suite (Demo)",
      });
      setLoginData({ username: "", password: "" });
      onHideLogin();
      onClose();
    },
    onError: (error: Error) => {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginData.username || !loginData.password) {
      toast({
        title: "Please enter both username and password",
        variant: "destructive",
      });
      return;
    }

    loginMutation.mutate(loginData);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  const features = [
    {
      icon: Calculator,
      title: "Advanced Calculations",
      description: "Comprehensive structural analysis and design calculations with automated code compliance checking."
    },
    {
      icon: CheckCircle,
      title: "Design Verification",
      description: "Real-time design verification with visual feedback and detailed reporting capabilities."
    },
    {
      icon: ChartGantt,
      title: "Project Management",
      description: "Integrated project management tools for tracking progress and collaboration."
    },
    {
      icon: FileText,
      title: "Report Generation",
      description: "Automated report generation with customizable templates and professional formatting."
    },
    {
      icon: Shield,
      title: "Code Compliance",
      description: "Built-in compliance checking for Australian building codes and standards."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Secure cloud storage and synchronization for seamless access across devices."
    }
  ];

  if (showLogin) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-gray-dark mb-2">
              Built Suite Login
            </DialogTitle>
            <p className="text-center text-gray-text">
              Enter your credentials to access Built Suite
            </p>
          </DialogHeader>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="username" className="block text-sm font-semibold text-gray-dark mb-2">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={loginData.username}
                onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-primary focus:ring-2 focus:ring-green-light focus:outline-none transition-colors"
              />
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-semibold text-gray-dark mb-2">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-primary focus:ring-2 focus:ring-green-light focus:outline-none transition-colors"
              />
            </div>

            <Button 
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-green-primary hover:bg-green-dark text-white py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {loginMutation.isPending ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-text mb-4">
              Don't have an account?{" "}
              <button 
                onClick={scrollToContact}
                className="text-green-primary hover:text-green-dark"
              >
                Contact us for access
              </button>
            </p>
            <button 
              onClick={onHideLogin}
              className="text-green-primary hover:text-green-dark transition-colors duration-200 flex items-center justify-center mx-auto"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Built Suite Information
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-green-primary mb-4">
            Built Suite
          </DialogTitle>
          <p className="text-lg text-gray-text">
            Comprehensive structural engineering software suite designed for modern engineering workflows
          </p>
          <div className="mt-4">
            <span className="bg-green-light text-green-dark px-4 py-2 rounded-full text-sm font-semibold">
              Professional Engineering Tools
            </span>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Key Features Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-dark mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-light rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-green-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-dark mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-text text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Access Built Suite Section */}
          <Card className="bg-gray-light rounded-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                Access Built Suite
              </h3>
              <p className="text-gray-text mb-6 max-w-2xl mx-auto">
                Ready to streamline your structural engineering workflow? Get started with Built Suite today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={onShowLogin}
                  className="bg-green-primary hover:bg-green-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Launch Built Suite
                </Button>
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  className="border-green-primary text-green-primary hover:bg-green-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Contact for Training
                </Button>
              </div>
              <p className="text-sm text-gray-text mt-4">
                Requires Built Suite account. New users can request access through our contact form.
              </p>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
