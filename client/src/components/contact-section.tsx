import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    projectType: "",
    message: "",
  });
  const { toast } = useToast();

  const submitContact = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setFormData({
        fullName: "",
        email: "",
        projectType: "",
        message: "",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    submitContact.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@builtengineers.com.au",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+61 414 142 833",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Sydney, Australia",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-green-primary text-sm font-semibold tracking-wide uppercase mb-2">
            CONTACT US
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-dark px-2">
            Get in touch with our engineering team
          </p>
        </div>

        {/* Contact Form */}
        <Card className="bg-gray-light rounded-2xl mb-12">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <Label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-dark mb-2"
                >
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-primary focus:ring-2 focus:ring-green-light focus:outline-none transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-dark mb-2"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-primary focus:ring-2 focus:ring-green-light focus:outline-none transition-colors"
                />
              </div>

              {/* Project Type */}
              <div>
                <Label
                  htmlFor="projectType"
                  className="block text-sm font-semibold text-gray-dark mb-2"
                >
                  Project Type
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) =>
                    handleInputChange("projectType", value)
                  }
                >
                  <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-primary focus:ring-2 focus:ring-green-light focus:outline-none transition-colors">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">
                      Residential Design
                    </SelectItem>
                    <SelectItem value="commercial">
                      Commercial Building
                    </SelectItem>
                    <SelectItem value="inspection">Site Inspection</SelectItem>
                    <SelectItem value="certification">
                      Structural Certification
                    </SelectItem>
                    <SelectItem value="consultation">
                      Engineering Consultation
                    </SelectItem>
                    <SelectItem value="builtsuite">
                      Built Suite Access/Training
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <Label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-dark mb-2"
                >
                  Your Message *
                </Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-primary focus:ring-2 focus:ring-green-light focus:outline-none transition-colors resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={submitContact.isPending}
                  className="bg-green-primary hover:bg-green-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg w-full sm:w-auto"
                >
                  {submitContact.isPending ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-green-primary w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-dark mb-2">
                  {info.title}
                </h4>
                <p className="text-gray-text">{info.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
