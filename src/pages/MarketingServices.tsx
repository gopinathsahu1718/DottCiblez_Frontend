import { Share2, ArrowRight, CheckCircle2, Users, Clock, TrendingUp, Shield, Zap, Target, BarChart3, MessageCircle, Hash, Star, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

// Social Media Marketing service data
const serviceData = {
  icon: Share2,
  title: "Social Media Marketing",
  // number: "03",
  tagline: "Amplify Your Brand Voice Across Digital Channels",
  description: "Drive measurable business growth through strategic social media marketing. Our comprehensive approach combines data-driven insights, creative content, and proven engagement strategies to build authentic connections with your audience and convert followers into loyal customers.",
  bgImage: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",

  highlights: [
    { icon: Users, title: "1M+", subtitle: "Followers Generated" },
    { icon: Award, title: "320%", subtitle: "Avg ROI Increase" },
    { icon: TrendingUp, title: "850%", subtitle: "Engagement Growth" },
    { icon: Clock, title: "24/7", subtitle: "Campaign Monitoring" }
  ],

  features: [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Comprehensive social media strategy development aligned with your business objectives, target audience insights, and competitive landscape analysis."
    },
    {
      icon: MessageCircle,
      title: "Content Creation",
      description: "Compelling, platform-optimized content including graphics, videos, stories, and copy that resonates with your audience and drives engagement."
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Proactive engagement with your audience, timely responses to comments and messages, and fostering meaningful conversations around your brand."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "In-depth performance tracking with actionable insights, monthly reports, and continuous optimization based on data-driven decisions."
    },
    {
      icon: Hash,
      title: "Influencer Partnerships",
      description: "Strategic collaborations with relevant influencers and brand ambassadors to expand reach and build credibility with target demographics."
    },
    {
      icon: Zap,
      title: "Paid Social Advertising",
      description: "ROI-focused paid campaigns across Facebook, Instagram, LinkedIn, Twitter, and TikTok with precise targeting and budget optimization."
    }
  ],

  process: [
    {
      step: "01",
      title: "Audit & Strategy Development",
      description: "We conduct a comprehensive audit of your current social presence, analyze competitors, identify opportunities, and develop a customized strategy with clear KPIs and measurable objectives."
    },
    {
      step: "02",
      title: "Content Calendar & Creation",
      description: "Build a strategic content calendar aligned with your marketing goals, create high-quality visual and written content, and establish a consistent brand voice across all platforms."
    },
    {
      step: "03",
      title: "Campaign Execution & Management",
      description: "Launch integrated campaigns across multiple platforms, manage daily posting schedules, engage with your community, and monitor real-time performance metrics."
    },
    {
      step: "04",
      title: "Analysis & Optimization",
      description: "Continuously analyze campaign performance, A/B test content variations, refine targeting strategies, and provide detailed monthly reports with actionable recommendations."
    }
  ],

  technologies: [
    "Hootsuite", "Sprout Social", "Buffer", "Meta Business Suite", "LinkedIn Campaign Manager",
    "Google Analytics", "Canva Pro", "Adobe Creative Suite", "Brandwatch", "Semrush Social"
  ],

  caseStudies: [
    {
      company: "GlobalTech Solutions",
      industry: "Enterprise SaaS",
      result: "450% increase in qualified leads",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "Summit Retail Group",
      industry: "E-commerce",
      result: "2.8M monthly impressions",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "Premier Financial Corp",
      industry: "Financial Services",
      result: "$1.2M in attributed revenue",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],

  platforms: [
    { name: "LinkedIn", description: "B2B lead generation and thought leadership" },
    { name: "Instagram", description: "Visual storytelling and brand awareness" },
    { name: "Facebook", description: "Community building and targeted advertising" },
    { name: "Twitter/X", description: "Real-time engagement and customer service" },
    { name: "TikTok", description: "Viral content and Gen-Z audience reach" },
    { name: "YouTube", description: "Video marketing and educational content" }
  ]
};

const MarketingServices = () => {
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
            {['overview', 'process', 'platforms', 'tools'].map((tab) => (
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
                Comprehensive Social Media Solutions
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
                Our Strategic Marketing Process
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
                Platforms We Master
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools Tab */}
          {activeTab === 'tools' && (
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
                Enterprise-Grade Marketing Tools
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

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Shield className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Brand Safety</h3>
                    <p className="text-sm text-slate-400">Advanced monitoring and protection protocols to safeguard your brand reputation across all platforms.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <BarChart3 className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Data Analytics</h3>
                    <p className="text-sm text-slate-400">Comprehensive dashboards and real-time reporting with actionable insights for continuous improvement.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Zap className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Rapid Response</h3>
                    <p className="text-sm text-slate-400">24/7 social listening and crisis management to protect and enhance your online presence.</p>
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
              Discover how our strategic social media campaigns have delivered exceptional ROI for leading corporations
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
              Proven Track Record
            </h2>
            <p className="text-lg text-slate-400">
              Results that speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">250+</div>
              <div className="text-slate-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">15M+</div>
              <div className="text-slate-400">Content Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-slate-400">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-slate-400">Retention Rate</div>
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
                Ready to Dominate Social Media?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Partner with industry-leading experts to transform your social media presence into a powerful revenue driver
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Schedule Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Request Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingServices;