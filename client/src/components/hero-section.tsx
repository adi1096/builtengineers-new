import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/attached_assets/HomepageImage.jpeg')"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          BUILT ON PRECISION.<br />
          <span className="text-green-primary">DRIVEN BY INNOVATION</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
          Compliant, Fast & Practical Engineering Solutions
        </p>
        <Button 
          onClick={scrollToServices}
          className="bg-green-primary hover:bg-green-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
          size="lg"
        >
          Explore Our Services
        </Button>
      </div>
    </section>
  );
}
