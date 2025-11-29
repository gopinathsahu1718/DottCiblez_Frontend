import { useState, useEffect } from 'react';
import { Award, Target, Lightbulb, Users, Shield, TrendingUp, Star, CheckCircle, Zap, Globe, Code, Server, Smartphone, Cloud, Mail, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';
import Statistics from '../components/Statistics';
import founderi from '../assets/founderimage.png'


const AboutUs = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: Code, title: "Web Development", description: "Cutting-edge web solutions" },
    { icon: Smartphone, title: "Mobile Apps", description: "Native & cross-platform" },
    { icon: Cloud, title: "Cloud Solutions", description: "Scalable infrastructure" },
    { icon: Server, title: "IT Infrastructure", description: "Enterprise-grade systems" },
    { icon: Shield, title: "Cybersecurity", description: "Advanced protection" },
    { icon: Globe, title: "Digital Marketing", description: "Growth-focused strategies" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Trust and transparency form the foundation of everything we do"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with creative and cutting-edge solutions"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional quality in every project we undertake"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results"
    }
  ];

  const testimonials = [
    {
      name: "RJIZ General Trading LLC",
      role: "Import Partner",
      content: "Dott Ciblez Technologies has been instrumental in streamlining our import process. Their professionalism and attention to detail are unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "We've been working with Dott Ciblez Technologies for years, and they consistently deliver top-notch products and services. Truly exceptional!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "50+", label: "Team Members", icon: Target }
  ];

  const founder = {
    name: "Mohammed Al-Rahman",
    role: "Founder & CEO",
    image: founderi,
    bio: "With over 5 years of experience in the IT industry, Mohammed founded Dott Ciblez Technologies with a vision to revolutionize how businesses leverage technology. His leadership and innovative approach have positioned the company as a leader in digital transformation across the Middle East.",
    achievements: [
      "5+ years in IT industry",
      "Former CTO at Fortune 500 company",
      "Published author on digital transformation",
      "Keynote speaker at global tech conferences"
    ],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mohammed@dottciblez.com"
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br  overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-black space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Leading IT Solutions Provider
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Transforming
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 py-5 sm:py-0 md:py-3">
                  Digital Future
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Dott Ciblez Technologies is the beacon of innovation and excellence, revolutionizing the digital landscape for businesses across the globe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button className="group bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  Get Started
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-semibold hover:bg-white/20 transform transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Logo/Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative z-10 bg-gradient-to-br from-blue-400 to-blue-600 backdrop-blur-xl border border-white/10 rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 lg:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-center">
                    <img
                      src={logo}
                      alt="DottCiblez Logo"
                      className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain filter drop-shadow-2xl"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                      <span className="text-white">Dott</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Ciblez</span>
                    </div>
                  </div>
                  <div className="h-1 w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full"></div>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Innovation • Excellence • Trust</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 rounded-2xl sm:rounded-3xl transition-all duration-300"></div>
                  <div className="relative z-10">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-400 mx-auto mb-2 sm:mb-3 lg:mb-4" />
                    <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
        {/* <Statistics/> */}

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16" data-animate id="about-header">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 block tracking-wider uppercase">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">Pioneering Digital Excellence</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              In a world where digital innovation is the key to success, Dott Ciblez Technologies is your trusted partner for navigating the complexities of the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Industry Leaders</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Recognized as pioneers in delivering cutting-edge IT solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Client-Focused</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Tailored solutions designed to meet your unique business needs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Innovation Driven</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Constantly pushing boundaries with the latest technologies</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 lg:p-12 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-48 sm:h-64 lg:h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 block tracking-wider uppercase">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">Comprehensive IT Solutions</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge technology and innovative solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transform transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-4 sm:mb-6 shadow-xl">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">Our Mission</h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed">
                To empower businesses with innovative IT solutions that drive growth and success in the digital age. We are committed to delivering tailored services and cutting-edge technology to meet the evolving needs of our clients.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-4 sm:mb-6 shadow-xl">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">Our Vision</h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed">
                To be the leading provider of transformative IT solutions, recognized for our commitment to excellence, innovation, and customer satisfaction. We aspire to be the trusted partner businesses turn to for technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 block tracking-wider uppercase">Our Values</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">What Drives Us</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our actions and define our commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 block tracking-wider uppercase">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">What Our Clients Say</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses worldwide for exceptional service and results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-2xl p-6 sm:p-8 lg:p-12 xl:p-16 border-2 border-blue-100">
              <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-center italic">
                "{testimonials[activeTestimonial].content}"
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white shadow-xl"
                />
                <div className="text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 lg:mt-12">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeTestimonial
                        ? 'bg-blue-600 w-8 sm:w-10 lg:w-12 h-2 sm:h-3'
                        : 'bg-gray-300 hover:bg-gray-400 w-2 sm:w-3 h-2 sm:h-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    
      {/* Founder Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-500 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="text-blue-900 font-semibold text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 block tracking-wider uppercase">Leadership</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6">Meet Our Founder</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto">
              Visionary leadership driving innovation and excellence
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-6 sm:p-8 lg:p-12 xl:p-16">
              <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className="lg:col-span-2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="relative w-full aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
                    />
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <a
                      href={founder.social.linkedin}
                      className="bg-white/10 hover:bg-blue-600 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </a>
                    <a
                      href={founder.social.twitter}
                      className="bg-white/10 hover:bg-blue-400 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </a>
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="bg-white/10 hover:bg-cyan-600 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-blue-900 font-semibold">
                      {founder.role}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                    {founder.bio}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold">Key Achievements</h4>
                    <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                      {founder.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 hover:bg-white/10 transition-all duration-300"
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 flex-shrink-0" />
                          <span className="text-xs sm:text-sm lg:text-base text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
            Join us on a journey of transformation and growth. Let's shape the future of your business together with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button className="group bg-white text-blue-600 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full text-sm sm:text-base lg:text-lg font-bold shadow-2xl hover:shadow-white/50 transform transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Get Started Today
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full text-sm sm:text-base lg:text-lg font-bold hover:bg-white/20 transform transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;