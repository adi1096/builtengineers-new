import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calculator,
  CheckCircle,
  ChartGantt,
  FileText,
  Shield,
  Cloud,
} from "lucide-react";

interface ResourcesSectionProps {
  onShowBuiltSuite: () => void;
}

export default function ResourcesSection({
  onShowBuiltSuite,
}: ResourcesSectionProps) {
  const features = [
    {
      icon: Calculator,
      title: "Advanced Calculations",
      description:
        "Comprehensive structural analysis and design calculations with automated code compliance checking.",
    },
    {
      icon: CheckCircle,
      title: "Design Verification",
      description:
        "Real-time design verification with visual feedback and detailed reporting capabilities.",
    },
    {
      icon: ChartGantt,
      title: "Project Management",
      description:
        "Integrated project management tools for tracking progress and collaboration.",
    },
    {
      icon: FileText,
      title: "Report Generation",
      description:
        "Automated report generation with customizable templates and professional formatting.",
    },
    {
      icon: Shield,
      title: "Code Compliance",
      description:
        "Built-in compliance checking for Australian building codes and standards.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Secure cloud storage and synchronization for seamless access across devices.",
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="resources" className="py-12 sm:py-16 lg:py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-green-primary text-sm font-semibold tracking-wide uppercase mb-2">
            Resources
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-dark px-2">
            Access our engineering tools and resources to support your projects
          </p>
        </div>

        {/* Built Suite Showcase */}
        <Card className="bg-white rounded-2xl shadow-sm mb-12">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-dark mb-4">
              Built Suite
            </h3>
            <p className="text-lg text-gray-text mb-8 max-w-3xl mx-auto">
              Our comprehensive structural engineering software suite provides
              advanced calculation tools, design verification, and project
              management capabilities to streamline your engineering workflow.
            </p>
            <Button
              onClick={onShowBuiltSuite}
              className="bg-green-primary hover:bg-green-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
              size="lg"
            >
              Learn More About Built Suite
            </Button>
            <p className="text-sm text-gray-text mt-4">
              Requires Built Suite account. Contact us for access or training.
            </p>
          </CardContent>
        </Card>

        {/* Built Suite Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-green-primary w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-dark mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-text">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section for Built Suite */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-dark mb-4">
            Access Built Suite
          </h3>
          <p className="text-gray-text mb-8 max-w-2xl mx-auto">
            Ready to streamline your structural engineering workflow? Get
            started with Built Suite today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onShowBuiltSuite}
              className="bg-green-primary hover:bg-green-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Launch Built Suite
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-green-primary text-green-primary hover:bg-green-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact for Training
            </Button>
          </div>
          <p className="text-sm text-gray-text mt-4">
            Requires Built Suite account. New users can request access through
            our contact form.
          </p>
        </div>
      </div>
    </section>
  );
}
