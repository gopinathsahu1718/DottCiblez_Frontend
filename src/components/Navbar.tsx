import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const navigate = useNavigate();
  // For hover delay close
  const closeTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    // Close mobile menu immediately
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // We're on home, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // We're on another page, navigate to home first
      navigate('/');
      // Wait for navigation and DOM to update, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutUsClick = () => {
    // Close all menus
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    // Navigate to About Us page
    navigate('/about-us');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceNavigation = (path) => {
    // Close all menus and dropdowns
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileMenuOpen(false);
    navigate(path);
    console.log('Navigate to:', path);
  };

  const services = [
    { name: 'Web Development', path: '/web-development-service' },
    { name: 'Software Design', path: '/software-design-service' },
    { name: 'Social Media App Development', path: '/social-media-development-service' },
    { name: 'Social Media Marketing', path: '/social-media-marketing-service' },
    { name: 'Datacentre Colocation', path: '/datacenter-colocation-service' },
    { name: 'Computer Systems & Communication Equipment', path: '/csce-service' },
    { name: 'Cloud Datacentre Service', path: '/cd-service' },
    { name: 'Cyber Audit Service', path: '/cyber-service' },
    { name: 'Education Software', path: '/education-software-service' },
    { name: 'IT Infrastructure Service', path: '/it-infrastructure-service' },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
       
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
       
        .mobile-menu-enter {
          animation: slideInRight 0.3s ease-out;
        }
       
        .overlay-enter {
          animation: fadeIn 0.3s ease;
        }

        /* Custom scrollbar for mobile services */
        .mobile-services-scroll::-webkit-scrollbar {
          width: 4px;
        }
        
        .mobile-services-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        .mobile-services-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        
        .mobile-services-scroll::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/98 backdrop-blur-sm shadow-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95 z-50"
              onClick={handleHomeClick}
            >
              {!logoError ? (
                <img
                  src={logo}
                  alt="DottCiblez Logo"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-opacity duration-300 hover:opacity-90"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="text-xl sm:text-2xl font-bold">
                  <span className="text-gray-800">Dott</span>
                  <span className="text-blue-600">Ciblez</span>
                </div>
              )}
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <button
                onClick={handleHomeClick}
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={handleAboutUsClick}
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 group"
              >
                Our Team
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  if (closeTimeout.current) clearTimeout(closeTimeout.current);
                  setIsServicesOpen(true);
                }}
                onMouseLeave={() => {
                  closeTimeout.current = setTimeout(() => {
                    setIsServicesOpen(false);
                  }, 150);
                }}
              >
                <button
                  className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 flex items-center gap-2 group"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''
                      }`}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <div
                  className={`absolute top-full left-0 mt-4 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${isServicesOpen
                    ? 'opacity-100 visible translate-y-0 scale-100'
                    : 'opacity-0 invisible -translate-y-2 scale-95 pointer-events-none'
                    }`}
                >
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceNavigation(service.path)}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 border-b border-gray-100 last:border-b-0 hover:pl-6"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => scrollToSection('achievements')}
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 group"
              >
                Achievements
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 group relative"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-2 transform transition-all duration-200 hover:scale-110 active:scale-95 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden overlay-enter"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-2xl z-40 lg:hidden transform transition-transform duration-300 ease-out overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0 mobile-menu-enter' : 'translate-x-full'
          }`}
      >
        <div className="pt-24 pb-8 px-6 space-y-1">
          <button
            onClick={handleHomeClick}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
          >
            Home
          </button>
          <button
            onClick={handleAboutUsClick}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
          >
            Our Team
          </button>
          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''
                  }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[50vh] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="ml-4 mt-1 border-l-2 border-gray-200 pl-4">
                <div className="max-h-[45vh] overflow-y-auto mobile-services-scroll space-y-1 pr-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceNavigation(service.path)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-md transition-all duration-200"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('achievements')}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
          >
            Achievements
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;