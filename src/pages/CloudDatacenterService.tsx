import { Cloud, ArrowRight, CheckCircle2, Users, Clock, TrendingUp, Shield, Zap, Server, Database, Lock, Globe, Star, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Cloud Service & Datacenters Providers service data
const serviceData = {
  icon: Cloud,
  title: "Cloud Datacenter Service",
  //   number: "07",
  tagline: "Enterprise-Grade Cloud Infrastructure & Data Center Solutions",
  description: "Power your business with cutting-edge cloud services and state-of-the-art data center infrastructure. We deliver scalable, secure, and highly available cloud solutions with 99.99% uptime, enterprise-grade security, and global reach to support your mission-critical applications and workloads.",
  bgImage: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200",

  highlights: [
    { icon: Globe, title: "50+", subtitle: "Global Data Centers" },
    { icon: Award, title: "99.99%", subtitle: "Uptime Guarantee" },
    { icon: TrendingUp, title: "10PB+", subtitle: "Data Managed" },
    { icon: Clock, title: "24/7", subtitle: "Expert Support" }
  ],

  features: [
    {
      icon: Cloud,
      title: "Cloud Computing Services",
      description: "Comprehensive IaaS, PaaS, and SaaS solutions with auto-scaling, load balancing, and multi-region deployment for maximum performance and reliability."
    },
    {
      icon: Server,
      title: "Dedicated Data Centers",
      description: "Tier III & IV certified data centers with redundant power, cooling systems, advanced fire suppression, and physical security with 24/7 monitoring."
    },
    {
      icon: Database,
      title: "Storage & Backup Solutions",
      description: "Scalable object storage, block storage, file storage, and automated backup solutions with disaster recovery and business continuity planning."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with DDoS protection, WAF, encryption at rest and in transit, SOC 2, ISO 27001, HIPAA, and GDPR compliance."
    },
    {
      icon: Globe,
      title: "Content Delivery Network",
      description: "Global CDN with edge locations worldwide, intelligent caching, SSL/TLS support, and real-time analytics for lightning-fast content delivery."
    },
    {
      icon: Zap,
      title: "High-Performance Computing",
      description: "GPU-accelerated instances, bare metal servers, and specialized compute for AI/ML workloads, big data analytics, and intensive applications."
    }
  ],

  process: [
    {
      step: "01",
      title: "Infrastructure Assessment",
      description: "Conduct comprehensive analysis of your current infrastructure, application requirements, workload patterns, compliance needs, and define migration strategy with detailed cost projections and ROI analysis."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design scalable cloud architecture with high availability, disaster recovery, security frameworks, network topology, and multi-region deployment strategy tailored to your business needs."
    },
    {
      step: "03",
      title: "Migration & Deployment",
      description: "Execute phased migration with minimal downtime, configure infrastructure-as-code, implement monitoring and logging, conduct performance testing, and ensure seamless cutover."
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, performance optimization, cost management, security updates, scaling adjustments, and 24/7 technical support with dedicated account management."
    }
  ],

  technologies: [
    "AWS", "Azure", "Google Cloud", "VMware", "Kubernetes", "Docker",
    "Terraform", "Ansible", "OpenStack", "Cisco", "Juniper", "NetApp"
  ],

  caseStudies: [
    {
      company: "FinTech Global Corp",
      industry: "Financial Services",
      result: "50% cost reduction achieved",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "Healthcare Network USA",
      industry: "Healthcare",
      result: "99.999% uptime maintained",
      image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "E-Commerce Leaders",
      industry: "Retail",
      result: "300% traffic scale handled",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],

  platforms: [
    {
      name: "Public Cloud Services",
      description: "Multi-cloud solutions on AWS, Azure, GCP with managed services",
      tech: "AWS, Azure, Google Cloud"
    },
    {
      name: "Private Cloud Infrastructure",
      description: "Dedicated cloud environments with complete control and isolation",
      tech: "VMware, OpenStack, KVM"
    },
    {
      name: "Hybrid Cloud Solutions",
      description: "Seamless integration between on-premise and cloud resources",
      tech: "Azure Arc, AWS Outposts"
    },
    {
      name: "Colocation Services",
      description: "Secure rack space in Tier III/IV data centers with redundancy",
      tech: "Dedicated Racks, Cages"
    },
    {
      name: "Disaster Recovery",
      description: "Hot/warm/cold DR sites with automated failover mechanisms",
      tech: "Veeam, Zerto, Site Recovery"
    },
    {
      name: "Managed Services",
      description: "24/7 infrastructure management, monitoring, and support",
      tech: "Monitoring, NOC, SOC"
    }
  ],

  solutions: [
    {
      title: "Enterprise Cloud Migration",
      description: "Comprehensive cloud migration services with zero-downtime strategies and application modernization.",
      icon: Cloud
    },
    {
      title: "Data Center Colocation",
      description: "Secure, compliant colocation with carrier-neutral connectivity and flexible power options.",
      icon: Server
    },
    {
      title: "Backup & DR",
      description: "Automated backup solutions with geo-redundant storage and rapid recovery capabilities.",
      icon: Database
    },
    {
      title: "Cloud Security",
      description: "Multi-layered security with advanced threat protection, encryption, and compliance management.",
      icon: Lock
    },
    {
      title: "Global CDN",
      description: "Edge computing and content delivery with sub-50ms latency across major markets.",
      icon: Globe
    },
    {
      title: "DevOps Solutions",
      description: "CI/CD pipelines, infrastructure-as-code, and containerized application deployment.",
      icon: Zap
    }
  ],

  certifications: [
    "SOC 2 Type II",
    "ISO 27001",
    "HIPAA",
    "PCI DSS",
    "GDPR",
    "FedRAMP"
  ]
};

const CloudDatacenterService = () => {
  const navigate = useNavigate();
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
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300" onClick={() => navigate('/contact-us')}>
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              {/* <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
                Tour Data Centers
              </button> */}
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
            {['overview', 'process', 'platforms', 'solutions'].map((tab) => (
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
                Complete Cloud & Infrastructure Solutions
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

          {/* Platforms Tab */}
          {activeTab === 'platforms' && (
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
                Cloud & Infrastructure Platforms
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
                        <Server className="w-4 h-4 text-purple-400" />
                        <span className="text-xs text-purple-300 font-semibold">{platform.tech}</span>
                      </div>
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
                Comprehensive Cloud Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceData.solutions.map((solution, index) => {
                  const SolutionIcon = solution.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                      <div className="relative bg-slate-900 rounded-2xl p-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30 mb-4">
                          <SolutionIcon className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tech Stack & Certifications */}
              <div className="mt-12 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-8 sm:p-12">
                <h3 className="text-2xl font-bold text-white mb-6">Technologies & Platforms</h3>
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

                <div className="pt-8 border-t border-slate-800">
                  <h3 className="text-xl font-bold text-white mb-6">Security & Compliance Certifications</h3>
                  <div className="flex flex-wrap gap-4 mb-12">
                    {serviceData.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="px-6 py-3 bg-purple-500/10 text-purple-300 rounded-xl border border-purple-500/30 font-semibold"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Shield className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Enterprise Security</h3>
                    <p className="text-sm text-slate-400">Multi-layered security with DDoS protection, WAF, encryption, and 24/7 SOC monitoring.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Auto-Scaling</h3>
                    <p className="text-sm text-slate-400">Intelligent auto-scaling to handle traffic spikes with cost optimization algorithms.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Globe className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Global Presence</h3>
                    <p className="text-sm text-slate-400">50+ data centers worldwide with low-latency connectivity and geo-redundancy.</p>
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
              Powering mission-critical applications for Fortune 500 companies worldwide
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

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Infrastructure at Scale
            </h2>
            <p className="text-lg text-slate-400">
              Enterprise-grade reliability and performance
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-slate-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-slate-400">Data Centers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">10PB+</div>
              <div className="text-slate-400">Data Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-slate-400">Uptime SLA</div>
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
                Ready to Scale Your Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's build a secure, scalable cloud infrastructure that powers your business growth with enterprise-grade reliability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300" onClick={() => navigate('/contact-us')}>
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                {/* <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Get Custom Quote
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudDatacenterService;