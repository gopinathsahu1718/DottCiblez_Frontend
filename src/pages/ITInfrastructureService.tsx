import { Network, ArrowRight, CheckCircle2, Server, Cloud, TrendingUp, Wifi, Zap, Database, Layers, HardDrive, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

// IT Infrastructure & Network Services data
const serviceData = {
  icon: Network,
  title: "IT Infrastructure Service",
  //   number: "04",
  tagline: "Build Robust, Scalable, and Future-Ready Infrastructure",
  description: "Design, deploy, and manage enterprise-grade IT infrastructure and network solutions that power your business operations. From data centers to cloud networks, we deliver high-performance, secure, and reliable infrastructure that scales with your growth while ensuring maximum uptime and optimal performance.",
  bgImage: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200",

  highlights: [
    { icon: Server, title: "99.99%", subtitle: "Infrastructure Uptime" },
    { icon: Award, title: "500+", subtitle: "Networks Deployed" },
    { icon: Cloud, title: "10PB+", subtitle: "Data Managed" },
    { icon: Zap, title: "24/7", subtitle: "Support & Monitoring" }
  ],

  features: [
    {
      icon: Server,
      title: "Data Center Solutions",
      description: "Design and implement on-premise data centers with redundant power, cooling, physical security, and high-availability configurations for mission-critical operations."
    },
    {
      icon: Network,
      title: "Network Architecture",
      description: "Enterprise network design with LAN/WAN optimization, SDN implementation, load balancing, and redundancy protocols ensuring seamless connectivity across all locations."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Multi-cloud and hybrid cloud architectures leveraging AWS, Azure, and GCP with automated provisioning, cost optimization, and disaster recovery capabilities."
    },
    {
      icon: Wifi,
      title: "Wireless Solutions",
      description: "Enterprise WiFi deployments with mesh networks, access point management, guest networks, and seamless roaming for complete wireless coverage."
    },
    {
      icon: Database,
      title: "Storage Systems",
      description: "Scalable storage solutions including SAN, NAS, object storage, and distributed file systems with backup, replication, and data lifecycle management."
    },
    {
      icon: Layers,
      title: "Virtualization Services",
      description: "VMware, Hyper-V, and KVM virtualization platforms with resource optimization, VM migration, and containerization using Docker and Kubernetes."
    }
  ],

  process: [
    {
      step: "01",
      title: "Assessment & Design",
      description: "Comprehensive infrastructure audit, capacity planning, and network topology design. Analyze current state, identify bottlenecks, define requirements, and create detailed architecture blueprints aligned with business objectives."
    },
    {
      step: "02",
      title: "Procurement & Setup",
      description: "Hardware and software procurement, vendor coordination, and equipment installation. Configure servers, networking equipment, storage systems, and establish foundational infrastructure components."
    },
    {
      step: "03",
      title: "Deployment & Integration",
      description: "Systematic rollout of infrastructure components with minimal disruption. Implement network segmentation, configure routing protocols, integrate with existing systems, and conduct comprehensive testing."
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "24/7 infrastructure monitoring with proactive alerting, performance tuning, capacity management, regular maintenance, security patching, and continuous optimization based on usage patterns."
    }
  ],

  technologies: [
    "Cisco", "Juniper", "VMware", "AWS", "Azure", "Kubernetes",
    "Docker", "Terraform", "Ansible", "Nagios", "Zabbix", "NetApp"
  ],

  caseStudies: [
    {
      company: "Enterprise Corp",
      industry: "Manufacturing",
      result: "40% cost reduction via cloud migration",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "GlobalTech Solutions",
      industry: "Technology Services",
      result: "Zero downtime in 2 years",
      image: "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "MediaStream Inc",
      industry: "Media & Entertainment",
      result: "5x bandwidth increase achieved",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],

  platforms: [
    {
      name: "Network Infrastructure",
      description: "Enterprise routing, switching, firewalls, and SD-WAN solutions",
      tech: "Cisco, Juniper, Fortinet"
    },
    {
      name: "Server Infrastructure",
      description: "Physical and virtual server deployment with high availability clustering",
      tech: "Dell, HP, VMware ESXi"
    },
    {
      name: "Cloud Platforms",
      description: "Multi-cloud architecture design and management across major providers",
      tech: "AWS, Azure, Google Cloud"
    },
    {
      name: "Storage Solutions",
      description: "Enterprise storage arrays, backup systems, and data protection",
      tech: "NetApp, Dell EMC, Pure Storage"
    },
    {
      name: "Monitoring Systems",
      description: "Comprehensive infrastructure monitoring and performance analytics",
      tech: "Nagios, Zabbix, Prometheus"
    },
    {
      name: "Security Infrastructure",
      description: "Network security appliances, IDS/IPS, and endpoint protection",
      tech: "Palo Alto, Fortinet, Cisco ASA"
    }
  ]
};

const ITInfrastructureService = () => {
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
                Get Infrastructure Consultation
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
            {['overview', 'process', 'platforms', 'technologies'].map((tab) => (
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
                End-to-End Infrastructure Solutions
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
                Our Infrastructure Deployment Process
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

          {/* Platforms Tab */}
          {activeTab === 'platforms' && (
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
                Comprehensive Infrastructure Components
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceData.platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                    <div className="relative bg-slate-900 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-3">
                        {platform.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                        <HardDrive className="w-4 h-4 text-purple-400" />
                        <span className="text-xs text-purple-300 font-semibold">{platform.tech}</span>
                      </div>
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
                Enterprise-Grade Technology Stack
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

                {/* Additional Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Server className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">High Availability</h3>
                    <p className="text-sm text-slate-400">Redundant systems with automatic failover to ensure 99.99% uptime for critical business operations.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Scalable Design</h3>
                    <p className="text-sm text-slate-400">Infrastructure that grows with your business, from startup to enterprise scale seamlessly.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Zap className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">24/7 Monitoring</h3>
                    <p className="text-sm text-slate-400">Proactive monitoring with real-time alerting and immediate response to infrastructure issues.</p>
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
              Infrastructure Success Stories
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Powering businesses with reliable, scalable, and high-performance infrastructure solutions
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
                      <Network className="w-4 h-4 text-purple-400" />
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

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Infrastructure Performance Metrics
            </h2>
            <p className="text-lg text-slate-400">
              Delivering exceptional reliability and performance across all deployments
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-slate-400">Networks Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">10PB+</div>
              <div className="text-slate-400">Data Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-slate-400">Average Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-slate-400">Support Available</div>
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
                Ready to Upgrade Your Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's build a robust, scalable infrastructure that powers your business growth and ensures maximum reliability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Schedule Infrastructure Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Request Architecture Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructureService;