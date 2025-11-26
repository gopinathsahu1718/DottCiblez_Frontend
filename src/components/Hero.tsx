import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    title: "Welcome to Dottciblez",
    subtitle: "Innovative Software Solutions for Modern Businesses",
    description: "We deliver cutting-edge technology solutions that drive growth and efficiency",
    gradient: "from-blue-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
  },
  {
    title: "Build the Future with Us",
    subtitle: "Expert Development Team at Your Service",
    description: "From concept to deployment, we bring your vision to life with precision",
    gradient: "from-indigo-600 to-blue-600",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
  },
  {
    title: "Scale Your Business Today",
    subtitle: "Enterprise-Grade Solutions That Work",
    description: "Trusted by industry leaders for delivering excellence in every project",
    gradient: "from-purple-600 to-pink-600",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="home" className="relative h-screen min-h-[500px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-10`} />

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div className="text-center md:text-left space-y-4 sm:space-y-6 order-2 md:order-1">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight px-4 sm:px-0">
                    {slide.title}
                  </h1>
                  <h2 className={`text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent px-4 sm:px-0`}>
                    {slide.subtitle}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0 px-4 sm:px-0">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 justify-center md:justify-start px-4 sm:px-0">
                    <button
                      onClick={scrollToContact}
                      className={`bg-gradient-to-r ${slide.gradient} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={() => {
                        const element = document.getElementById('services');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 md:order-2">
                  <div className="relative mx-auto max-w-sm sm:max-w-md md:max-w-full">
                    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={slide.image}
                        alt="IT Industry"
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-30 mix-blend-multiply`} />
                    </div>
                    <div className={`absolute -inset-4 bg-gradient-to-br ${slide.gradient} opacity-20 rounded-2xl blur-2xl -z-10`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-6 sm:w-8 bg-blue-600' : 'w-1.5 sm:w-2 bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;