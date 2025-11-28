import { Shield, ArrowRight, CheckCircle2, Search, Lock, TrendingUp, AlertTriangle, Zap, FileCheck, Target, Bug, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

// Auditing, Reviewing & Testing Cyber Risks service data
const serviceData = {
  icon: Shield,
  title: "Cyber Audit Service",
  //   number: "03",
  tagline: "Identify Vulnerabilities Before Attackers Do",
  description: "Comprehensive cybersecurity assessments that uncover hidden vulnerabilities, evaluate security controls, and validate your defense mechanisms. Our expert-led audits, penetration testing, and risk reviews provide actionable insights to strengthen your security posture and ensure regulatory compliance.",
  bgImage: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200",

  highlights: [
    { icon: Search, title: "1000+", subtitle: "Security Audits Completed" },
    { icon: Award, title: "98%", subtitle: "Threat Detection Rate" },
    { icon: Bug, title: "5000+", subtitle: "Vulnerabilities Found" },
    { icon: Lock, title: "100%", subtitle: "Compliance Success" }
  ],

  features: [
    {
      icon: FileCheck,
      title: "Security Audits",
      description: "Comprehensive evaluation of security policies, controls, and procedures against industry standards including ISO 27001, NIST, and CIS benchmarks to identify gaps and weaknesses."
    },
    {
      icon: Bug,
      title: "Penetration Testing",
      description: "Ethical hacking simulations that replicate real-world attack scenarios to identify exploitable vulnerabilities in applications, networks, and infrastructure before malicious actors do."
    },
    {
      icon: Target,
      title: "Vulnerability Assessments",
      description: "Automated and manual scanning of systems, applications, and networks to discover security weaknesses, misconfigurations, and outdated components requiring remediation."
    },
    {
      icon: AlertTriangle,
      title: "Risk Analysis",
      description: "Quantitative and qualitative risk assessments that prioritize threats based on business impact, likelihood, and severity to guide strategic security investments."
    },
    {
      icon: Lock,
      title: "Compliance Testing",
      description: "Validate adherence to regulatory requirements including GDPR, HIPAA, PCI-DSS, SOC 2, and industry-specific standards with detailed compliance gap analysis and remediation roadmaps."
    },
    {
      icon: Zap,
      title: "Red Team Operations",
      description: "Advanced adversary simulations testing detection and response capabilities through multi-vector attacks, social engineering, and physical security testing to measure true security effectiveness."
    }
  ],

  process: [
    {
      step: "01",
      title: "Scoping & Planning",
      description: "Define audit objectives, scope boundaries, testing methodologies, and success criteria. Conduct stakeholder interviews, review existing documentation, and establish testing timelines and communication protocols."
    },
    {
      step: "02",
      title: "Discovery & Assessment",
      description: "Perform comprehensive reconnaissance, asset discovery, and security control evaluation. Execute automated scans, manual testing, and configuration reviews to identify vulnerabilities and security gaps."
    },
    {
      step: "03",
      title: "Exploitation & Validation",
      description: "Safely exploit identified vulnerabilities to confirm exploitability and business impact. Conduct privilege escalation, lateral movement, and data exfiltration testing to demonstrate real-world risk exposure."
    },
    {
      step: "04",
      title: "Reporting & Remediation",
      description: "Deliver detailed findings with CVSS scoring, business impact analysis, and prioritized remediation guidance. Provide executive summaries, technical reports, and ongoing support for vulnerability remediation validation."
    }
  ],

  technologies: [
    "Metasploit", "Burp Suite", "Nessus", "Qualys", "OWASP ZAP", "Wireshark",
    "Nmap", "Kali Linux", "Cobalt Strike", "Tenable.io", "Acunetix", "SIEM Tools"
  ],

  caseStudies: [
    {
      company: "FinTech Global",
      industry: "Financial Services",
      result: "100% PCI-DSS compliance achieved",
      image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "HealthSecure",
      industry: "Healthcare Technology",
      result: "50 critical vulnerabilities patched",
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "RetailChain Pro",
      industry: "E-Commerce Platform",
      result: "Zero security breaches post-audit",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],

  platforms: [
    {
      name: "Network Security Testing",
      description: "Comprehensive assessment of network infrastructure, firewalls, and perimeter defenses",
      tech: "Nmap, Wireshark, Metasploit"
    },
    {
      name: "Web Application Testing",
      description: "OWASP Top 10 testing, API security, and application logic vulnerability assessment",
      tech: "Burp Suite, OWASP ZAP, SQLMap"
    },
    {
      name: "Cloud Security Audits",
      description: "Multi-cloud security posture assessment for AWS, Azure, and GCP environments",
      tech: "ScoutSuite, Prowler, CloudSploit"
    },
    {
      name: "Mobile App Security",
      description: "iOS and Android application security testing including reverse engineering",
      tech: "MobSF, Frida, Objection"
    },
    {
      name: "Infrastructure Assessment",
      description: "Server hardening reviews, configuration audits, and patch management validation",
      tech: "Nessus, Qualys, OpenVAS"
    },
    {
      name: "Social Engineering Tests",
      description: "Phishing campaigns, vishing, and physical security testing to assess human factors",
      tech: "GoPhish, SET, Custom Tools"
    }
  ]
};

const CyberAuditService = () => {
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
                Schedule Security Audit
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
                View Sample Reports
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
                Comprehensive Security Assessment Services
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
                Our Security Testing Methodology
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
                Multi-Domain Security Testing
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
                        <Target className="w-4 h-4 text-purple-400" />
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
                Industry-Leading Security Tools
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
                    <Shield className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Certified Experts</h3>
                    <p className="text-sm text-slate-400">OSCP, CEH, and CISSP certified security professionals with real-world attack experience.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Actionable Reports</h3>
                    <p className="text-sm text-slate-400">Detailed findings with remediation guidance, proof of concepts, and prioritized action plans.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Zap className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Continuous Support</h3>
                    <p className="text-sm text-slate-400">Post-assessment remediation support and retesting to validate fixes and security improvements.</p>
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
              Security Success Stories
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Protecting organizations from cyber threats through comprehensive security assessments
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
                      <Shield className="w-4 h-4 text-purple-400" />
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
              Security Assessment Impact
            </h2>
            <p className="text-lg text-slate-400">
              Measurable results that strengthen security posture
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-slate-400">Audits Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">5000+</div>
              <div className="text-slate-400">Vulnerabilities Found</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-slate-400">Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-slate-400">Client Satisfaction</div>
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
                Ready to Strengthen Your Security?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our certified experts identify vulnerabilities and provide actionable recommendations to protect your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Request Security Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Download Methodology Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberAuditService;