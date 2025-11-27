import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Github, ChevronLeft, ChevronRight } from 'lucide-react';

function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const team = [
    {
      name: "Alex Thompson",
      role: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "Visionary leader with 15+ years of tech industry experience"
    },
    {
      name: "Jessica Lee",
      role: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "Expert in software architecture and cloud technologies"
    },
    {
      name: "Marcus Brown",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "Full-stack developer passionate about building scalable solutions"
    },
    {
      name: "Sophia Martinez",
      role: "UX/UI Designer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "Creative designer focused on user-centered design principles"
    },
    {
      name: "Ryan Kim",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "Digital marketing strategist driving brand growth"
    },
    {
      name: "Emma Wilson",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "Agile expert ensuring timely project delivery"
    }
  ];

  // Update items per view based on screen size
  // Mobile: 2 cards, Tablet: 3 cards, Desktop: 3 cards
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
        const maxIndex = Math.ceil(team.length / itemsPerView) - 1;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [itemsPerView, team.length]);

  const nextSlide = () => {
    const maxIndex = Math.ceil(team.length / itemsPerView) - 1;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.ceil(team.length / itemsPerView) - 1;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleTeam = team.slice(
    currentIndex * itemsPerView,
    (currentIndex + 1) * itemsPerView
  );

  const totalSlides = Math.ceil(team.length / itemsPerView);

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Meet Our Team
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Talented professionals dedicated to your success
          </p>
        </motion.div>

        <div className="relative px-2 sm:px-4 md:px-6 lg:px-12">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
              >
                {visibleTeam.map((member, index) => (
                  <div
                    key={`${currentIndex}-${index}`}
                    className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                  >
                    <div className="relative w-full h-40 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 sm:pb-4 md:pb-5 lg:pb-6">
                        <div className="flex gap-2 sm:gap-2.5 md:gap-3">
                          <a
                            href="#"
                            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                          >
                            <Linkedin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                          </a>
                          <a
                            href="#"
                            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                          >
                            <Twitter className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                          </a>
                          <a
                            href="#"
                            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                          >
                            <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                          </a>
                        </div>
                      </div> */}
                    </div>
                    <div className="p-3 sm:p-4 md:p-5 lg:p-6 text-center">
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-xs md:text-sm lg:text-base text-blue-600 font-semibold mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3">
                        {member.role}
                      </p>
                      <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
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
              className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
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
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-6 sm:w-7 md:w-8 bg-blue-600' : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;