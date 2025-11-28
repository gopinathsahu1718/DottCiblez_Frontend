import { GraduationCap, ArrowRight, CheckCircle2, Users, Clock, TrendingUp, Shield, Zap, BookOpen, Video, Brain, Award, Star, Monitor } from 'lucide-react';
import { useState, useEffect } from 'react';

// Education & Training Computer Software service data
const serviceData = {
  icon: GraduationCap,
  title: "Education & Training Computer Software",
  //   number: "06",
  tagline: "Transform Learning with Intelligent EdTech Solutions",
  description: "Revolutionize education and corporate training with cutting-edge software solutions. We build comprehensive learning management systems, interactive e-learning platforms, and AI-powered training tools that enhance knowledge retention, engagement, and measurable learning outcomes.",
  bgImage: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1200",

  highlights: [
    { icon: Users, title: "2M+", subtitle: "Active Learners" },
    { icon: Award, title: "95%", subtitle: "Completion Rate" },
    { icon: TrendingUp, title: "400%", subtitle: "Engagement Increase" },
    { icon: Clock, title: "50%", subtitle: "Faster Learning" }
  ],

  features: [
    {
      icon: BookOpen,
      title: "Learning Management Systems",
      description: "Comprehensive LMS platforms with course creation, student management, progress tracking, assessments, certifications, and advanced analytics for institutions and enterprises."
    },
    {
      icon: Video,
      title: "Interactive E-Learning",
      description: "Engaging multimedia courses with video lectures, interactive simulations, gamification elements, quizzes, and adaptive learning paths tailored to individual student needs."
    },
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Machine learning algorithms that adapt content difficulty, recommend courses, predict learning outcomes, and provide personalized feedback to maximize retention."
    },
    {
      icon: Monitor,
      title: "Virtual Classrooms",
      description: "Real-time video conferencing, collaborative whiteboards, breakout rooms, screen sharing, recording capabilities, and interactive polling for remote learning environments."
    },
    {
      icon: Award,
      title: "Assessment & Certification",
      description: "Comprehensive testing systems with automated grading, anti-cheating measures, skill assessments, badge systems, and verifiable digital certifications."
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Deep learning analytics, student performance dashboards, engagement metrics, ROI tracking, and actionable insights for educators and administrators."
    }
  ],

  process: [
    {
      step: "01",
      title: "Requirements & Curriculum Analysis",
      description: "Conduct thorough needs assessment, analyze existing curriculum, identify learning objectives, define user personas (students, instructors, admins), and establish measurable KPIs for educational outcomes."
    },
    {
      step: "02",
      title: "Pedagogical Design & Architecture",
      description: "Design learning experience frameworks, create intuitive navigation structures, develop content organization systems, and architect scalable infrastructure supporting multimedia content and concurrent users."
    },
    {
      step: "03",
      title: "Development & Content Integration",
      description: "Build responsive platforms with mobile-first approach, integrate SCORM/xAPI compliance, implement gamification mechanics, develop assessment engines, and create content authoring tools for educators."
    },
    {
      step: "04",
      title: "Testing, Launch & Support",
      description: "Conduct usability testing with real learners, perform accessibility audits (WCAG compliance), execute pilot programs, provide comprehensive training, and offer ongoing technical support and feature updates."
    }
  ],

  technologies: [
    "React", "Node.js", "Python", "TensorFlow", "Moodle", "Canvas LMS",
    "MongoDB", "PostgreSQL", "AWS", "WebRTC", "SCORM", "xAPI"
  ],

  caseStudies: [
    {
      company: "Global University Network",
      industry: "Higher Education",
      result: "500K students onboarded",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "TechCorp Training Academy",
      industry: "Corporate Training",
      result: "85% skill improvement",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      company: "K-12 Digital Schools",
      industry: "Primary Education",
      result: "40% better test scores",
      image: "https://images.pexels.com/photos/8500467/pexels-photo-8500467.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ],

  platforms: [
    {
      name: "Learning Management Systems",
      description: "Full-featured LMS with course management and student portals",
      tech: "React, Node.js, MongoDB"
    },
    {
      name: "Virtual Classroom Software",
      description: "Real-time video learning with interactive collaboration tools",
      tech: "WebRTC, Socket.io, AWS"
    },
    {
      name: "Mobile Learning Apps",
      description: "iOS and Android apps for learning on-the-go",
      tech: "React Native, Flutter"
    },
    {
      name: "Content Authoring Tools",
      description: "Drag-and-drop course builders for non-technical educators",
      tech: "React, SCORM, xAPI"
    },
    {
      name: "Assessment Platforms",
      description: "Advanced testing engines with AI-powered proctoring",
      tech: "Python, TensorFlow, OpenCV"
    },
    {
      name: "Student Information Systems",
      description: "Complete academic records and enrollment management",
      tech: "Java, Spring Boot, MySQL"
    }
  ],

  solutions: [
    {
      title: "K-12 Education",
      description: "Interactive learning platforms for primary and secondary schools with parent portals and curriculum alignment.",
      icon: BookOpen
    },
    {
      title: "Higher Education",
      description: "Comprehensive university LMS with research collaboration tools and degree management systems.",
      icon: GraduationCap
    },
    {
      title: "Corporate Training",
      description: "Employee onboarding, skills development, compliance training, and leadership development programs.",
      icon: Users
    },
    {
      title: "Professional Certification",
      description: "Industry certification programs with exam prep, practice tests, and credential management.",
      icon: Award
    },
    {
      title: "Language Learning",
      description: "AI-powered language acquisition platforms with speech recognition and adaptive practice.",
      icon: Brain
    },
    {
      title: "Skills Marketplaces",
      description: "Online course platforms connecting instructors with learners for diverse skill development.",
      icon: TrendingUp
    }
  ]
};

const EducationSoftware = () => {
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
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
                View Demo
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
                Complete EdTech Solutions
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
                Our Development Process
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
                Educational Software Platforms
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
                        <Monitor className="w-4 h-4 text-purple-400" />
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
                Industry-Specific Solutions
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

              {/* Tech Stack */}
              <div className="mt-12 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-8 sm:p-12">
                <h3 className="text-2xl font-bold text-white mb-6">Technologies We Use</h3>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Shield className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Data Security</h3>
                    <p className="text-sm text-slate-400">FERPA and GDPR compliant with enterprise-grade encryption protecting student data and privacy.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Brain className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">AI-Powered Learning</h3>
                    <p className="text-sm text-slate-400">Machine learning algorithms that personalize content and predict learning outcomes.</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                    <Zap className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Scalable Architecture</h3>
                    <p className="text-sm text-slate-400">Cloud infrastructure supporting millions of concurrent users with 99.9% uptime.</p>
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
              Success Stories
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Empowering institutions and organizations with transformative educational technology
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

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Impact Across Education
            </h2>
            <p className="text-lg text-slate-400">
              Transforming learning experiences worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-slate-400">Institutions Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">2M+</div>
              <div className="text-slate-400">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">10M+</div>
              <div className="text-slate-400">Courses Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-slate-400">Platform Uptime</div>
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
                Ready to Transform Education?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's build innovative learning solutions that engage students, empower educators, and deliver measurable outcomes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationSoftware;