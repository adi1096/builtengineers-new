import { Building } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
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
                <div className="text-sm font-bold text-green-primary">BUILT ENGINEERS</div>
                <div className="text-xs text-gray-400">& CONSULTANTS</div>
              </div>
            </div>
            <p className="text-gray-400">
              Professional structural engineering solutions built on precision and driven by innovation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Structural Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Site Inspections
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Structural Certification
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Construction Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Built Suite
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Training
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                info@builtengineers.com.au
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                (+61) 414 142 833
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Sydney, Australia
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Built Engineers. All rights reserved.</p>
          <p className="text-sm mt-2">An SR Design.</p>
        </div>
      </div>
    </footer>
  );
}
