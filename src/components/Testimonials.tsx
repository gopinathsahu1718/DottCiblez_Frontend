import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import "./Testimonials.css"

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "DottCiblez transformed our digital presence completely. Their team's expertise and dedication to our project exceeded all expectations. The results speak for themselves."
    },
    {
      name: "Michael Chen",
      position: "Founder, Digital Dynamics",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Working with DottCiblez was a game-changer for our business. They delivered a solution that not only met our needs but anticipated future requirements."
    },
    {
      name: "Emily Rodriguez",
      position: "CTO, Innovation Labs",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Professional, responsive, and incredibly talented. The DottCiblez team took our complex requirements and turned them into an elegant, scalable solution."
    },
    {
      name: "David Park",
      position: "Director, CloudScale",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Outstanding quality and attention to detail. DottCiblez delivered our project on time and within budget. Their post-launch support has been exceptional."
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Real stories from businesses we've helped succeed
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center min-h-[350px] sm:min-h-[400px] md:min-h-[450px] px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 bg-white border-2 border-blue-600 text-blue-600 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 z-10 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Testimonial Card */}
          <div
            key={currentIndex}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white max-w-3xl w-full shadow-2xl transition-all duration-500"
          >
            {/* Quote Icon */}
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-30 mb-4 sm:mb-6" />

            {/* Stars */}
            <div className="flex gap-1 sm:gap-1.5 mb-4 sm:mb-6 text-yellow-400">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 md:mb-10 italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 sm:border-3 border-white object-cover"
              />
              <div className="text-left">
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 bg-white border-2 border-blue-600 text-blue-600 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 z-10 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                  ? 'w-8 sm:w-10 md:w-12 bg-blue-600'
                  : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;