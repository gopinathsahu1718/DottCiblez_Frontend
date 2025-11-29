import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import logo from '../assets/logo.png';

// Import flag images
import UAEFlag from '../assets/UAE.png';
import IndiaFlag from '../assets/INDIA.png';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="achievements" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="DottCiblez Logo"
              className="h-20 sm:h-24 md:h-28 lg:h-24 w-auto object-contain transition-opacity duration-300 hover:opacity-90"
            />
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              Transforming businesses through innovative software solutions and exceptional digital experiences.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <button className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['home', 'about', 'services', 'team', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base capitalize"
                  >
                    {link === 'home' ? 'Home' : link === 'about' ? 'About Us' : link === 'team' ? 'Our Team' : link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'E-Commerce', 'IT Consulting'].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs sm:text-sm text-purple-400"><a href="mailto:info@dottciblez.com">info@dottciblez.com</a></p>
                  <p className="text-xs sm:text-sm text-purple-400"><a href="mailto:support@dottciblez.com">support@dottciblez.com</a></p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs sm:text-sm">+91 7077792764</p>
                  <p className="text-xs sm:text-sm">+91 7077791446</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 mt-1" />
                <p className="text-xs sm:text-sm">Unit 126, 1st floor, DLF cybercity, Infocity park, Patia, Bhubaneswar, 751024</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Imported Flags */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col items-center gap-6">
            {/* Flags - Centered */}
            {/* <div className="flex items-center gap-6 sm:gap-8">
              <div className="flex flex-col items-center">
                <img
                  src={UAEFlag}
                  alt="United Arab Emirates Flag"
                  className="w-12 sm:w-16 h-auto rounded-md shadow-lg border border-gray-700"
                />
                <span className="text-xs text-gray-500 mt-2 font-medium">UAE</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={IndiaFlag}
                  alt="India Flag"
                  className="w-12 sm:w-16 h-auto rounded-md shadow-lg border border-gray-700"
                />
                <span className="text-xs text-gray-500 mt-2 font-medium">India</span>
              </div>
            </div> */}

            {/* Copyright & Legal Links */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-center md:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} DottCiblez. All rights reserved.
              </p>
              <div className="flex items-center gap-6 sm:gap-8">
                <div className="flex flex-col items-center">
                  <img
                    src={UAEFlag}
                    alt="United Arab Emirates Flag"
                    className="w-12 sm:w-16 h-auto rounded-md shadow-lg border border-gray-700"
                  />
                  <span className="text-xs text-gray-500 mt-2 font-medium">UAE</span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={IndiaFlag}
                    alt="India Flag"
                    className="w-12 sm:w-16 h-auto rounded-md shadow-lg border border-gray-700"
                  />
                  <span className="text-xs text-gray-500 mt-2 font-medium">India</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <button className="hover:text-purple-400 transition-colors duration-300">
                  Privacy Policy
                </button>
                <button className="hover:text-purple-400 transition-colors duration-300">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;