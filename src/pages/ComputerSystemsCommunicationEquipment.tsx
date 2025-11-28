import { Server, ArrowRight, CheckCircle2, Users, Clock, TrendingUp, Shield, Zap, Network, Cpu, HardDrive, Radio, Star, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

// Computer Systems & Communication Equipment service data
const serviceData = {
  icon: HardDrive,
  title: "Computer Systems & Communication Equipment",
  // number: "04",
  tagline: "Enterprise Infrastructure Solutions for Mission-Critical Operations",
  description: "Deploy robust, scalable IT infrastructure with our comprehensive computer systems and communication equipment solutions. We provide end-to-end services from design and procurement to installation, integration, and ongoing support for enterprises demanding maximum uptime and performance.",
  bgImage: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200",

  highlights: [
    { icon: Users, title: "500+", subtitle: "Enterprise Deployments" },
    { icon: Award, title: "99.99%", subtitle: "System Uptime SLA" },
    { icon: TrendingUp, title: "60%", subtitle: "Cost Optimization" },
    { icon: Clock, title: "24/7/365", subtitle: "Technical Support" }
  ],

  features: [
    {
      icon: Server,
      title: "Enterprise Server Solutions",
      description: "High-performance server infrastructure including blade servers, rack-mounted systems, and hyper-converged solutions designed for demanding workloads and maximum reliability."
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Advanced networking equipment including switches, routers, firewalls, and load balancers to build secure, high-speed networks that scale with your business."
    },
    {
      icon: HardDrive,
      title: "Storage Systems",
      description: "Enterprise-grade storage solutions from SAN and NAS to cloud-connected storage arrays with built-in redundancy, backup, and disaster recovery capabilities."
    },
    {
      icon: Radio,
      title: "Unified Communications",
      description: "Complete communication systems including VoIP, video conferencing, collaboration platforms, and contact center solutions for seamless business communications."
    },
    {
      icon: Cpu,
      title: "Data Center Solutions",
      description: "Full data center design, build, and management services including power, cooling, cabling, and environmental monitoring for optimal performance."
    },
    {
      icon: Shield,
      title: "Security Infrastructure",
      description: "Comprehensive security systems including firewalls, intrusion detection, encryption appliances, and access control to protect your critical assets."
    }
  ],

  process: [
    {
      step: "01",
      title: "Assessment & Design",
      description: "Comprehensive analysis of your current infrastructure, business requirements, growth projections, and compliance needs. Our engineers create detailed architecture designs with capacity planning and ROI analysis."
    },
    {
      step: "02",
      title: "Procurement & Integration",
      description: "Leverage our vendor relationships to source best-in-class equipment at competitive pricing. We handle all logistics, ensuring compatibility and optimal configuration for your environment."
    },
    {
      step: "03",
      title: "Installation & Deployment",
      description: "Professional installation by certified technicians with minimal disruption to operations. Comprehensive testing, documentation, and knowledge transfer to your IT team."
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "Proactive 24/7 monitoring, preventive maintenance, rapid incident response, and continuous optimization to ensure peak performance and maximum uptime."
    }
  ],

  technologies: [
    "Cisco Systems", "Dell EMC", "HPE ProLiant", "Juniper Networks", "NetApp",
    "VMware", "Microsoft Azure Stack", "Palo Alto Networks", "Arista", "Pure Storage"
  ],

  caseStudies: [
    {
      company: "National Bank Corp",
      industry: "Financial Services",
      result: "Zero downtime in 36 months",
      image: "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "MediCare Health Systems",
      industry: "Healthcare",
      result: "HIPAA compliant infrastructure",
      image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "Global Manufacturing Inc",
      industry: "Manufacturing",
      result: "40% reduction in IT costs",
      image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],

  solutions: [
    {
      name: "Server Infrastructure",
      description: "Rack, blade, and tower servers with redundant power and storage",
      specs: "Up to 1000+ cores per deployment"
    },
    {
      name: "Network Equipment",
      description: "Switches, routers, and wireless access points for enterprise networks",
      specs: "10/40/100 Gbps capabilities"
    },
    {
      name: "Storage Arrays",
      description: "SAN, NAS, and object storage with tiering and deduplication",
      specs: "Petabyte-scale capacity"
    },
    {
      name: "Communication Systems",
      description: "VoIP PBX, video conferencing, and unified messaging platforms",
      specs: "Supports 10,000+ users"
    },
    {
      name: "Security Appliances",
      description: "Next-gen firewalls, IPS/IDS, and SSL inspection",
      specs: "Multi-gigabit throughput"
    },
    {
      name: "Backup Solutions",
      description: "Automated backup systems with encryption and replication",
      specs: "RTO < 1 hour, RPO < 15 min"
    }
  ]
};

const ComputerSystemsCommunicationEquipment = () => {
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
                Request Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
                Download Solutions Guide
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
            {['overview', 'process', 'solutions', 'partners'].map((tab) => (
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
                Comprehensive IT Infrastructure Services
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
                Our Implementation Process
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

          {/* Solutions Tab */}
          {activeTab === 'solutions' && (
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
                Infrastructure Solutions Portfolio
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceData.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                    <div className="relative bg-slate-900 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-3">
                        {solution.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                        <Zap className="w-4 h-4 text-purple-400" />
                        <span className="text-xs text-purple-300 font-semibold">{solution.specs}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Partners Tab */}
          {activeTab === 'partners' && (
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
                Trusted Technology Partners
              </h2>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-8 sm:p-12">
                <div className="flex flex-wrap gap-4 mb-12">
                  {serviceData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-6 py-3 bg-slate-800/50 text-slate-300 rounded-xl border border-slate-700/50 font-medium hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Award className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Certified Partners</h3>
                    <p className="text-sm text-slate-400">Gold and platinum tier partnerships with leading manufacturers for priority support and best pricing.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Shield className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Compliance Ready</h3>
                    <p className="text-sm text-slate-400">Solutions designed to meet SOC 2, ISO 27001, HIPAA, PCI-DSS, and other regulatory requirements.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Scalable Architecture</h3>
                    <p className="text-sm text-slate-400">Infrastructure designed to scale seamlessly from departmental to enterprise-wide deployments.</p>
                  </div>
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
              Enterprise Success Stories
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Delivering mission-critical infrastructure solutions for organizations that demand excellence
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
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
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

      {/* Service Level Guarantees */}
      <section className="py-16 sm:py-20 lg:py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Service Level Commitments
            </h2>
            <p className="text-lg text-slate-400">
              Industry-leading guarantees backed by our proven track record
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-slate-400">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">&lt;15min</div>
              <div className="text-slate-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">24/7/365</div>
              <div className="text-slate-400">Support Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">10+ Years</div>
              <div className="text-slate-400">Equipment Lifecycle</div>
            </div>
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
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Partner with industry experts to build a resilient, scalable infrastructure that powers your business growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Schedule Infrastructure Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Contact Sales Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComputerSystemsCommunicationEquipment;