import { Monitor, Code, Share2, TrendingUp, Server, HardDrive, Cloud, Shield, GraduationCap, Network, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    bgImage: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    number: "01",
    path: "/web-development-service"
  },
  {
    icon: Code,
    title: "Software Design",
    description: "Comprehensive software design solutions tailored to your business needs with scalable architecture.",
    features: ["Custom Solutions", "Scalable Architecture", "Agile Development"],
    bgImage: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    number: "02",
    path: "/software-design-service"
  },
  {
    icon: Share2,
    title: "Social Media App Development",
    description: "Build engaging social media platforms with real-time features and seamless user interactions.",
    features: ["Real-time Chat", "Feed Systems", "User Analytics"],
    bgImage: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    number: "03",
    path: "/social-media-development-service"
  },
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    description: "Data-driven marketing strategies to grow your online presence and reach your target audience.",
    features: ["SEO/SEM", "Social Media", "Content Strategy"],
    bgImage: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    number: "04",
    path: "/social-media-marketing-service"
  },
  {
    icon: Server,
    title: "Datacenter Colocation",
    description: "Secure and reliable datacenter colocation services with 24/7 monitoring and support.",
    features: ["24/7 Monitoring", "High Security", "Redundant Power"],
    bgImage: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
    number: "05",
    path: "/datacenter-colocation-service"
  },
  {
    icon: HardDrive,
    title: "Computer Systems & Communication Equipment",
    description: "Enterprise-grade computer systems and communication equipment for modern businesses.",
    features: ["Hardware Solutions", "Network Equipment", "Infrastructure"],
    bgImage: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
    number: "06",
    path: "/csce-service"
  },
  {
    icon: Cloud,
    title: "Cloud Datacenter Service",
    description: "Scalable cloud infrastructure solutions with high availability and disaster recovery.",
    features: ["Auto-scaling", "Backup & Recovery", "Global CDN"],
    bgImage: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    number: "07",
    path: "/cd-service"
  },
  {
    icon: Shield,
    title: "Cyber Audit Service",
    description: "Comprehensive cybersecurity audits to protect your business from threats and vulnerabilities.",
    features: ["Security Assessment", "Compliance Audit", "Risk Analysis"],
    bgImage: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    number: "08",
    path: "/cyber-service"
  },
  {
    icon: GraduationCap,
    title: "Education Software",
    description: "Innovative educational software solutions for modern learning environments and institutions.",
    features: ["LMS Integration", "Interactive Learning", "Progress Tracking"],
    bgImage: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    number: "09",
    path: "/education-software-service"
  },
  {
    icon: Network,
    title: "IT Infrastructure Service",
    description: "Complete IT infrastructure management and support services for enterprise organizations.",
    features: ["Network Management", "System Administration", "Technical Support"],
    bgImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    number: "10",
    path: "/it-infrastructure-service"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleExploreService = (path) => {
    navigate(path);
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-slate-950 to-purple-950/50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 bg-blue-500/10 border border-blue-500/20 px-5 py-2.5 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 tracking-wide">
              ENTERPRISE SOLUTIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6">
            Transform Your Business
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology solutions designed for forward-thinking organizations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

                {/* Card */}
                <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden transition-all duration-500 group-hover:border-slate-700">
                  {/* Top Bar with Number */}
                  <div className="flex items-center justify-between p-5 sm:p-6 pb-0">
                    <span className="text-5xl sm:text-6xl font-bold text-slate-600 group-hover:text-slate-500 transition-colors duration-300">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 pt-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features with Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2.5 py-1 text-xs bg-slate-800/50 text-slate-300 rounded-full border border-slate-700/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <button
                      onClick={() => handleExploreService(service.path)}
                      className="group/btn inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

                  {/* Background Pattern */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${service.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      maskImage: 'radial-gradient(circle, black 0%, transparent 70%)'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="inline-block p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-slate-400 mb-6 sm:mb-8 max-w-xl mx-auto">
              Let's discuss how we can help transform your business with our enterprise solutions
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
              <a href="#contact">Schedule Consultation</a>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;