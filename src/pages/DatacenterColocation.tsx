import { ArrowRight, CheckCircle2, Users, Clock, TrendingUp, Shield, Zap, Server, Thermometer, Lock, Activity, Star, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

// Datacentre Colocation Services data (unchanged content)
const serviceData = {
  icon: Server,
  title: "Datacentre Colocation",
  // number: "06",
  tagline: "Enterprise-Grade Infrastructure in Tier III+ Certified Facilities",
  description: "Secure your critical infrastructure in our state-of-the-art colocation facilities. From single rack deployments to full cage solutions, we provide reliable, scalable, and cost-effective hosting with carrier-neutral connectivity, redundant power, advanced cooling, and 24/7 security in strategically located data centers.",
  bgImage: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1200",

  highlights: [
    { icon: Shield, title: "Tier III+", subtitle: "Certified Facilities" },
    { icon: Award, title: "99.995%", subtitle: "Uptime Guarantee" },
    { icon: TrendingUp, title: "40%", subtitle: "Cost Savings vs Build" },
    { icon: Clock, title: "24/7/365", subtitle: "On-Site Support" }
  ],

  features: [
    { icon: Server, title: "Flexible Colocation Options", description: "Choose from quarter rack to full cage solutions with scalable infrastructure that grows with your business needs. Private suites available for enterprise deployments." },
    { icon: Zap, title: "Redundant Power Systems", description: "N+1 redundant power infrastructure with UPS systems, backup generators, and diverse utility feeds ensuring continuous operations during any power event." },
    { icon: Thermometer, title: "Advanced Cooling Solutions", description: "Precision environmental controls with hot/cold aisle containment, in-row cooling, and 24/7 monitoring maintaining optimal temperature and humidity levels." },
    { icon: Lock, title: "Multi-Layer Security", description: "Biometric access control, 24/7 security personnel, video surveillance, mantrap entry systems, and comprehensive visitor management protocols." },
    { icon: Activity, title: "Carrier-Neutral Connectivity", description: "Direct access to multiple Tier 1 carriers, internet exchanges, and cloud on-ramps with diverse fiber entry points for optimal connectivity options." },
    { icon: Shield, title: "Compliance & Certifications", description: "SOC 2 Type II, ISO 27001, PCI-DSS, HIPAA compliant facilities with regular audits and comprehensive compliance documentation for regulated industries." }
  ],

  process: [
    { step: "01", title: "Assessment & Planning", description: "Comprehensive evaluation of your infrastructure requirements including power density, cooling needs, connectivity requirements, and compliance obligations. Site tours and capacity planning included." },
    { step: "02", title: "Design & Configuration", description: "Custom cabinet layouts, power distribution design, network connectivity planning, and security access setup. Detailed implementation plan with migration timeline and risk mitigation." },
    { step: "03", title: "Migration & Deployment", description: "Professional equipment installation with minimal downtime. Coordinated logistics, careful equipment handling, cable management, and comprehensive testing of all systems." },
    { step: "04", title: "Ongoing Management", description: "Continuous monitoring, remote hands support, scheduled maintenance, capacity management, and regular reporting. Dedicated account management and technical support team." }
  ],

  technologies: [
    "Schneider Electric Infrastructure", "Vertiv Cooling Systems", "Eaton UPS Systems",
    "Raritan Power Distribution", "APC InfraStruxure", "Liebert Precision Cooling",
    "Cisco Networking", "Fiber Optic Infrastructure", "Environmental Monitoring", "Access Control Systems"
  ],

  caseStudies: [
    { company: "FinTech Global", industry: "Financial Services", result: "Zero downtime migration", image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { company: "HealthCare Systems Inc", industry: "Healthcare IT", result: "Full HIPAA compliance", image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { company: "E-Commerce Leader", industry: "Retail Technology", result: "50% infrastructure cost cut", image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  solutions: [
    { name: "Quarter Rack", description: "Ideal for startups and small deployments with 10U space", specs: "2kW power, 1Gbps connectivity" },
    { name: "Half Rack", description: "Perfect for growing businesses needing 20U capacity", specs: "4kW power, 10Gbps connectivity" },
    { name: "Full Rack", description: "Complete 42U cabinet for comprehensive deployments", specs: "8kW power, 10Gbps+ connectivity" },
    { name: "Private Cage", description: "Dedicated secure space for multiple racks and equipment", specs: "Custom power, dedicated cross-connects" },
    { name: "Private Suite", description: "Exclusive data center floor space for enterprise needs", specs: "Scalable power density, private entrance" },
    { name: "Disaster Recovery", description: "Geographically distributed colocation for business continuity", specs: "Multi-site redundancy, sync services" }
  ]
};

const DatacenterColocation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const Icon = serviceData.icon;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section - PURPLE/PINK THEME */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-slate-950 to-pink-950/50" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${serviceData.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDE2OCwgODUsIDE5OSwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              {/* <span className="text-6xl sm:text-7xl font-bold text-slate-800">{serviceData.number}</span> */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">{serviceData.title}</h1>
            <p className="text-xl sm:text-2xl text-purple-400 font-medium mb-6 sm:mb-8">{serviceData.tagline}</p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 sm:mb-10">{serviceData.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
                Schedule Tour <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
                Download Brochure
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
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{item.title}</div>
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
          <div className="flex flex-wrap gap-3 mb-12 sm:mb-16 border-b border-slate-800 pb-6">
            {['overview', 'process', 'solutions', 'facilities'].map((tab) => (
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">World-Class Colocation Infrastructure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceData.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                      <div className="relative bg-slate-900 rounded-2xl p-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30 mb-4">
                          <FeatureIcon className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">Our Colocation Process</h2>
              <div className="space-y-6">
                {serviceData.process.map((step, index) => (
                  <div key={index} className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      <div className="text-5xl font-bold text-slate-500 group-hover:text-slate-700 transition-colors">{step.step}</div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{step.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{step.description}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">Flexible Colocation Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceData.solutions.map((solution, index) => (
                  <div key={index} className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                    <div className="relative bg-slate-900 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{solution.name}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-3">{solution.description}</p>
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

          {/* Facilities Tab */}
          {activeTab === 'facilities' && (
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">State-of-the-Art Infrastructure</h2>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-8 sm:p-12">
                <div className="flex flex-wrap gap-4 mb-12">
                  {serviceData.technologies.map((tech, index) => (
                    <span key={index} className="px-6 py-3 bg-slate-800/50 text-slate-300 rounded-xl border border-slate-700/50 font-medium hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Thermometer className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Climate Control</h3>
                    <p className="text-sm text-slate-400">Precision cooling systems maintaining 68-72°F temperature and 40-60% humidity with real-time monitoring.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Lock className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Physical Security</h3>
                    <p className="text-sm text-slate-400">Multi-layer access control with biometrics, 24/7 guards, video surveillance, and comprehensive audit trails.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Activity className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Network Connectivity</h3>
                    <p className="text-sm text-slate-400">Carrier-neutral with 20+ providers, multiple internet exchanges, and diverse fiber paths for redundancy.</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Trusted by leading enterprises for mission-critical infrastructure hosting</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.caseStudies.map((study, index) => (
              <div key={index} className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                <div className="relative bg-slate-900 rounded-2xl overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${study.image})` }}>
                    <div className="absolute inset-0 bg-gradient-to-t  to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-purple-400 uppercase tracking-wide font-semibold">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                    <p className="text-purple-300 font-bold text-lg mb-4">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20 lg:py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Certifications & Compliance</h2>
            <p className="text-lg text-slate-400">Meeting the highest industry standards for security and reliability</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center"><div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">Tier III+</div><div className="text-slate-400">Data Center Tier</div></div>
            <div className="text-center"><div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">SOC 2</div><div className="text-slate-400">Type II Certified</div></div>
            <div className="text-center"><div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">ISO 27001</div><div className="text-slate-400">Information Security</div></div>
            <div className="text-center"><div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">PCI-DSS</div><div className="text-slate-400">Payment Compliant</div></div>
          </div>
        </div>
      </section>

      {/* Final CTA - PURPLE/PINK */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600" />
            <div className="relative p-12 sm:p-16 lg:p-20 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Secure Your Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Experience the reliability and security of Tier III+ colocation with flexible solutions tailored to your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Schedule Facility Tour <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Get Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatacenterColocation;