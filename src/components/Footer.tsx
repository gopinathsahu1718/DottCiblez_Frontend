import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import UAEFlag from '../assets/UAE.png';
import IndiaFlag from '../assets/INDIA.png';

const Footer = () => {
  return (
    <footer id="achievements" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">

          {/* Logo Section */}
          <div className="col-span-2 lg:col-span-1">
            <img src={logo} alt="DottCiblez Logo" className="h-20 sm:h-24 md:h-28 lg:h-24 w-auto object-contain" />
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              Transforming businesses through innovative software solutions and exceptional digital experiences.
            </p>

            <div className="flex gap-3">
              <Facebook className="cursor-pointer hover:text-blue-600" />
              <Twitter className="cursor-pointer hover:text-blue-400" />
              <Instagram className="cursor-pointer hover:text-pink-600" />
              <Linkedin className="cursor-pointer hover:text-blue-700" />
              {/* <Github className="cursor-pointer hover:text-gray-500" /> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">

              <li><Link to="/web-development-service" className="hover:text-purple-400">Web Development</Link></li>

              <li><Link to="/software-design-service" className="hover:text-purple-400">Software Design</Link></li>

              <li><Link to="/social-media-development-service" className="hover:text-purple-400">Social Media App Development</Link></li>

              <li><Link to="/social-media-marketing-service" className="hover:text-purple-400">Social Media Marketing</Link></li>

              <li><Link to="/datacenter-colocation-service" className="hover:text-purple-400">Datacenter Colocation</Link></li>

              <li><Link to="/csce-service" className="hover:text-purple-400">Computer Systems & Communication Equipment</Link></li>

              <li><Link to="/cd-service" className="hover:text-purple-400">Cloud Datacenter Service</Link></li>

              <li><Link to="/cyber-service" className="hover:text-purple-400">Cyber Audit Service</Link></li>

              <li><Link to="/education-software-service" className="hover:text-purple-400">Education Software</Link></li>

              <li><Link to="/it-infrastructure-service" className="hover:text-purple-400">IT Infrastructure Service</Link></li>

            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-purple-400">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>

          

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Mail className="mt-1.5 w-5 h-5 text-purple-400" />
                <div>
                  <p><a href="mailto:info@dottciblez.com" className="text-purple-400">info@dottciblez.com</a></p>
                  <p><a href="mailto:support@dottciblez.com" className="text-purple-400">support@dottciblez.com</a></p>
                </div>
              </li>

              <li className="flex gap-3">
                <Phone className="mt-1.5 w-5 h-5 text-purple-400" />
                <div>
                  <p>+91 7077792764</p>
                  <p>+91 7077791446</p>
                </div>
              </li>

              <li className="flex gap-3">
                <MapPin className="mt-1.5 w-5 h-5 text-purple-400" />
                <div>
                  <p className='py-1'>Unit 126, 1st Floor, DLF Cybercity, Bhubaneswar, 751024</p>
                  <p>Dubai United Arab Emirates</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} DottCiblez. All rights reserved.
            </p>

            {/* Flags */}
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center">
                <img src={UAEFlag} className="w-14 rounded-md border border-gray-700" />
                <span className="text-xs text-gray-500 mt-2">UAE</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={IndiaFlag} className="w-14 rounded-md border border-gray-700" />
                <span className="text-xs text-gray-500 mt-2">India</span>
              </div>
            </div>

            <div className="flex gap-6 text-sm">
              <button className="hover:text-purple-400">Privacy Policy</button>
              <button className="hover:text-purple-400">Terms of Service</button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
