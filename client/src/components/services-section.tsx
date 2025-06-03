import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Structural Design",
    description: "Efficient and code-compliant designs for residential and commercial buildings.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    primaryTags: ["Residential Design", "Commercial Buildings"],
    secondaryTags: ["Steel & Concrete", "Code Compliance"]
  },
  {
    title: "Site Inspections",
    description: "Prompt and professional site inspections with detailed reports.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    primaryTags: ["Foundation Inspections", "Framing Reviews"],
    secondaryTags: ["Compliance Checks", "Detailed Reports"]
  },
  {
    title: "Structural Certification",
    description: "Fast turnaround structural certification for existing or new structures.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    primaryTags: ["Building Certifications", "Compliance Documentation"],
    secondaryTags: ["Safety Assessments", "Fast Turnaround"]
  },
  {
    title: "Structural Analysis",
    description: "Advanced computational analysis using industry-leading software tools.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    primaryTags: ["FEA Analysis"],
    secondaryTags: ["Load Calculations", "Seismic Design"]
  },
  {
    title: "Construction Support",
    description: "On-site engineering support throughout the construction process.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    primaryTags: ["Site Supervision"],
    secondaryTags: ["Quality Control", "Progress Reviews"]
  },
  {
    title: "Engineering Consultation",
    description: "Expert consultation services for complex engineering challenges.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    primaryTags: ["Technical Reviews"],
    secondaryTags: ["Expert Advice", "Code Interpretation"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-primary text-sm font-semibold tracking-wide uppercase mb-2">
            OUR SERVICES
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Comprehensive structural engineering solutions tailored to meet your project requirements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-text mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.primaryTags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      className="bg-green-light text-green-dark hover:bg-green-light"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.secondaryTags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-gray-100 text-gray-text hover:bg-gray-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
