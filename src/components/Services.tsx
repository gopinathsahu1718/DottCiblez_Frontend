import { Monitor, Smartphone, Palette, ShoppingCart, BarChart, Settings } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    bgImage: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    features: ["iOS & Android", "Cross-Platform", "Push Notifications"],
    bgImage: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user psychology and modern design principles in mind.",
    features: ["User Research", "Wireframing", "Prototyping"],
    bgImage: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete e-commerce platforms with secure payment gateways and inventory management systems.",
    features: ["Payment Integration", "Inventory System", "Analytics"],
    bgImage: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence and reach your target audience.",
    features: ["SEO/SEM", "Social Media", "Content Strategy"],
    bgImage: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description: "Expert guidance on technology strategy, infrastructure, and digital transformation initiatives.",
    features: ["Strategy Planning", "Tech Audit", "Implementation"],
    bgImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              >
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4 sm:mb-5 md:mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm md:text-base text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <button className="text-xs sm:text-sm md:text-base text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center gap-1 sm:gap-2 group-hover:gap-3">
                    Learn More
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;