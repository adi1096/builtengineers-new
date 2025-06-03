import { useState, useEffect } from "react";
import { Building } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "testimonials", "resources", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "resources", label: "Resources" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              {/* Bar Chart Icon */}
              <div className="flex items-end space-x-0.5">
                <div className="w-1.5 h-3 bg-green-primary rounded-sm"></div>
                <div className="w-1.5 h-4 bg-green-primary rounded-sm"></div>
                <div className="w-1.5 h-6 bg-green-primary rounded-sm"></div>
                <div className="w-1.5 h-8 bg-green-primary rounded-sm"></div>
                <div className="w-1.5 h-6 bg-green-primary rounded-sm"></div>
                <div className="w-1.5 h-7 bg-green-primary rounded-sm"></div>
                <div className="w-1.5 h-5 bg-green-primary rounded-sm"></div>
                <div className="w-1.5 h-4 bg-green-primary rounded-sm"></div>
                <div className="w-1.5 h-3 bg-green-primary rounded-sm"></div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-dark">BUILT</div>
                <div className="text-lg font-bold text-gray-dark">ENGINEERS</div>
                <div className="text-sm font-semibold text-gray-dark">& CONSULTANTS</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors font-medium ${
                  activeSection === item.id
                    ? "text-gray-dark"
                    : "text-gray-text hover:text-green-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-text hover:text-green-primary"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-gray-dark"
                    : "text-gray-text hover:text-green-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
