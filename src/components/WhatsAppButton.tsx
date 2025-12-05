import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = '917077791446';
  const message = 'Hello! I would like to inquire about your services.';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-3 overflow-hidden"
          aria-label="Contact us on WhatsApp"
        >
          <div
            className={`flex items-center px-4 py-4 transition-all duration-300 ${
                isHovered ? 'gap-3' : 'gap-0'
            }`}
            >

            {/* ORIGINAL WHATSAPP ICON */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12.04 2c-5.51 0-9.98 4.47-9.98 9.98 0 1.76.46 3.48 1.34 5.01L2 22l5.17-1.35c1.47.8 3.13 1.22 4.87 1.22h.01c5.51 0 9.98-4.47 9.98-9.98S17.55 2 12.04 2zm0 18.24c-1.55 0-3.06-.41-4.38-1.18l-.31-.18-3.07.8.82-2.99-.2-.31c-.82-1.32-1.25-2.84-1.25-4.39 0-4.59 3.74-8.33 8.33-8.33 4.59 0 8.33 3.74 8.33 8.33s-3.74 8.33-8.33 8.33zm4.61-6.21c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.13-.17.25-.65.8-.8.96-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.12-.12.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.43h-.49c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.08s.9 2.41 1.03 2.58c.13.17 1.77 2.71 4.29 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.3z" />
              </svg>
            </div>

            {/* Text */}
            <span
              className={`whitespace-nowrap font-semibold text-sm sm:text-base transition-all duration-300 ${
                isHovered
                  ? 'max-w-[200px] opacity-100'
                  : 'max-w-0 opacity-0 sm:max-w-0 sm:opacity-0'
              } overflow-hidden`}
            >
              Chat with us
            </span>
          </div>

          <span className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </button>

        {/* Animated Rings */}
        <div className="absolute inset-0 -z-10">
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-pulse"></span>
        </div>
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="fixed bottom-24 left-6 z-40 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-xl animate-fadeIn hidden sm:block">
          Need help? Chat with us!
          <div className="absolute -bottom-1 left-6 w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
