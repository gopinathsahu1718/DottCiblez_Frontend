import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Headset, Rocket, Shield, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

function WhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const reasons = [
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />,
      title: "Proven Excellence",
      description: "Award-winning solutions recognized by industry leaders worldwide"
    },
    {
      icon: <Headset className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance to keep your business running smoothly"
    },
    {
      icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />,
      title: "Fast Delivery",
      description: "Agile methodologies ensuring rapid deployment without compromising quality"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security protecting your data and operations"
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />,
      title: "On-Time Projects",
      description: "98% on-time delivery rate backed by efficient project management"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />,
      title: "Expert Team",
      description: "Seasoned professionals with diverse expertise and proven track records"
    }
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.ceil(reasons.length / itemsPerView) - 1;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [itemsPerView, reasons.length]);

  const nextSlide = () => {
    const maxIndex = Math.ceil(reasons.length / itemsPerView) - 1;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.ceil(reasons.length / itemsPerView) - 1;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleReasons = reasons.slice(
    currentIndex * itemsPerView,
    (currentIndex + 1) * itemsPerView
  );

  const totalSlides = Math.ceil(reasons.length / itemsPerView);

  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Why Choose DottCiblez
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Excellence in every aspect of our service delivery
          </p>
        </motion.div>

        <div className="relative px-2 sm:px-4 md:px-6 lg:px-12">
          {/* Carousel Container */}
          <div className="overflow-hidden py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
              >
                {visibleReasons.map((reason, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500"
                  >
                    <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-xl sm:rounded-2xl inline-flex items-center justify-center text-white transition-transform duration-300 hover:rotate-[360deg]">
                        {reason.icon}
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Desktop & Tablet */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-6 bg-white p-2 md:p-2.5 lg:p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 items-center justify-center z-10"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-6 bg-white p-2 md:p-2.5 lg:p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 items-center justify-center z-10"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex sm:hidden justify-between mt-4 px-2">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-7 md:mt-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 sm:w-7 md:w-8 bg-blue-800' : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;