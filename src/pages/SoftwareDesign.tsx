import { Palette, ArrowRight, CheckCircle2, Users, Clock, TrendingUp, Shield, Zap, Layers, Figma, Sparkles, Eye, Star, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

// Software Design service data
const serviceData = {
  icon: Palette,
  title: "Software Design",
  // number: "02",
  tagline: "Crafting Intuitive Interfaces That Users Love",
  description: "Elevate your digital products with exceptional design. Our talented design team creates user-centric interfaces that blend aesthetic excellence with seamless functionality, ensuring your software not only looks stunning but delivers an unforgettable user experience.",
  bgImage: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",

  highlights: [
    { icon: Users, title: "500+", subtitle: "Designs Created" },
    { icon: Award, title: "95%", subtitle: "User Satisfaction" },
    { icon: TrendingUp, title: "180%", subtitle: "Engagement Boost" },
    { icon: Clock, title: "2-4 Weeks", subtitle: "Typical Timeline" }
  ],

  features: [
    {
      icon: Eye,
      title: "User Research",
      description: "In-depth user research and analysis to understand your audience's needs, behaviors, and pain points for informed design decisions."
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that prioritize user experience while maintaining brand consistency and modern design standards."
    },
    {
      icon: Figma,
      title: "Interactive Prototypes",
      description: "High-fidelity prototypes that bring your vision to life, allowing you to test and validate before development begins."
    },
    {
      icon: Sparkles,
      title: "Design Systems",
      description: "Comprehensive design systems with reusable components, ensuring consistency and efficiency across your entire product."
    },
    {
      icon: Zap,
      title: "Micro-interactions",
      description: "Delightful animations and transitions that enhance user engagement and create memorable experiences."
    },
    {
      icon: Shield,
      title: "Accessibility First",
      description: "WCAG-compliant designs that ensure your software is usable by everyone, regardless of abilities or disabilities."
    }
  ],

  process: [
    {
      step: "01",
      title: "Research & Discovery",
      description: "We begin with comprehensive user research, competitive analysis, and stakeholder interviews to understand your users, market positioning, and business objectives."
    },
    {
      step: "02",
      title: "Wireframing & Architecture",
      description: "Create low-fidelity wireframes and information architecture that map out user flows, content hierarchy, and core functionality structure."
    },
    {
      step: "03",
      title: "Visual Design & Prototyping",
      description: "Transform wireframes into stunning high-fidelity designs with your brand identity, then build interactive prototypes for user testing."
    },
    {
      step: "04",
      title: "Handoff & Support",
      description: "Deliver complete design specifications, assets, and design systems to developers with ongoing support during implementation."
    }
  ],

  technologies: [
    "Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer", "Zeplin", "Abstract"
  ],

  caseStudies: [
    {
      company: "HealthTrack Pro",
      industry: "Healthcare",
      result: "40% increase in user retention",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "EduLearn Platform",
      industry: "EdTech",
      result: "5-star app store rating",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "BankEase Mobile",
      industry: "Banking",
      result: "65% faster task completion",
      image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]
};

const SoftwareDesign = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const Icon = serviceData.icon;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-slate-950 to-pink-950/50" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${serviceData.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDE2OCwgODUsIDE5OSwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Service Number & Icon */}
            <div className="flex items-center gap-4 mb-6">
              {/* <span className="text-6xl sm:text-7xl font-bold text-slate-800">
                {serviceData.number}
              </span> */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
              </div>
            </div>

            {/* Title & Description */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              {serviceData.title}
            </h1>
            <p className="text-xl sm:text-2xl text-purple-400 font-medium mb-6 sm:mb-8">
              {serviceData.tagline}
            </p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 sm:mb-10">
              {serviceData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="border-y border-slate-800 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {serviceData.highlights.map((item, index) => {
              const HighlightIcon = item.icon;
              return (
                <div key={index} className="text-center">
                  <HighlightIcon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {item.title}
                  </div>
                  <div className="text-sm text-slate-400">{item.subtitle}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-12 sm:mb-16 border-b border-slate-800 pb-6">
            {['overview', 'process', 'technologies'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
                Key Features & Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceData.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                      <div className="relative bg-slate-900 rounded-2xl p-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30 mb-4">
                          <FeatureIcon className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Process Tab */}
          {activeTab === 'process' && (
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
                Our Design Process
              </h2>
              <div className="space-y-6">
                {serviceData.process.map((step, index) => (
                  <div
                    key={index}
                    className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      <div className="text-5xl font-bold text-slate-500 group-hover:text-slate-700 transition-colors">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Tab */}
          {activeTab === 'technologies' && (
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
                Tools & Software We Use
              </h2>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-8 sm:p-12">
                <div className="flex flex-wrap gap-4">
                  {serviceData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-6 py-3 bg-slate-800/50 text-slate-300 rounded-xl border border-slate-700/50 font-medium hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              See how our design solutions have transformed user experiences and driven business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                <div className="relative bg-slate-900 rounded-2xl overflow-hidden">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${study.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t  to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-purple-400 uppercase tracking-wide font-semibold">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {study.company}
                    </h3>
                    <p className="text-purple-300 font-bold text-lg mb-4">
                      {study.result}
                    </p>
                    {/* <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 font-semibold">
                      Read Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600" />
            <div className="relative p-12 sm:p-16 lg:p-20 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Create Amazing Experiences?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our {serviceData.title.toLowerCase()} services can elevate your product and delight your users
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  View Design Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDesign;