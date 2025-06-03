import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-green-primary text-sm font-semibold tracking-wide uppercase mb-2">
              CLIENT TESTIMONIALS
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-gray-dark">
              See what our clients say about our structural engineering services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="bg-gray-light animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-4"></div>
                  <div className="h-20 bg-gray-300 rounded mb-6"></div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div className="ml-4">
                      <div className="h-4 bg-gray-300 rounded mb-2 w-24"></div>
                      <div className="h-3 bg-gray-300 rounded w-32"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-primary text-sm font-semibold tracking-wide uppercase mb-2">
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-dark">
            See what our clients say about our structural engineering services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-light rounded-xl hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-text italic mb-6">
                  "{testimonial.testimonialText}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-dark">
                      {testimonial.clientName}
                    </p>
                    <p className="text-gray-text text-sm">
                      {testimonial.clientCompany}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
