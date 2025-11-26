import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            {!logoError ? (
              <img 
                src={logo}
                alt="DottCiblez Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                DottCiblez
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Our Team
            </button>

            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center gap-1"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Web Development
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Mobile App Development
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  UI/UX Design
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  E-Commerce Solutions
                </button>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('achievements')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Our Team
            </button>
            
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileServicesOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  <button
                    onClick={() => scrollToSection('services')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    Web Development
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    Mobile App Development
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    UI/UX Design
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    E-Commerce Solutions
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('achievements')}
              className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;