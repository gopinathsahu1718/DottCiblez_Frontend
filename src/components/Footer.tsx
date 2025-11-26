import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="achievements" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 sm:mb-4">
              DottCiblez
            </h3>
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

          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('team')}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Mobile Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  UI/UX Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  E-Commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  IT Consulting
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs sm:text-sm">info@dottciblez.com</p>
                  <p className="text-xs sm:text-sm">support@dottciblez.com</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs sm:text-sm">+1 (555) 123-4567</p>
                  <p className="text-xs sm:text-sm">+1 (555) 765-4321</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-xs sm:text-sm">123 Tech Street, Innovation District<br />San Francisco, CA 94105</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; 2024 DottCiblez. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <button className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </button>
              <button className="hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;