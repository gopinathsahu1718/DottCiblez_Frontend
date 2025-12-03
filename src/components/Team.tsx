import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  description: string;
  email: string;
  phone: string;
  linkedin: string;
  twitter: string;
  github: string;
}

function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
    {
      name: "Alex Thompson",
      role: "Chief Executive Officer",
      image: "https://img.freepik.com/premium-photo/smiling-man-professional-profile-picture_606187-855.jpg",
      bio: "Visionary leader with 15+ years of tech industry experience",
      description: "Alex Thompson is a seasoned technology executive with over 15 years of experience leading innovative companies. Before joining our team, he served as VP of Engineering at a Fortune 500 company and founded two successful startups. His expertise lies in strategic planning, team building, and driving digital transformation. Alex holds an MBA from Stanford and a BS in Computer Science from MIT. He's passionate about mentoring young entrepreneurs and speaks regularly at tech conferences worldwide.",
      email: "alex.thompson@company.com",
      phone: "+1 (555) 123-4567",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Jessica Lee",
      role: "Chief Technology Officer",
      image: "https://static.vecteezy.com/system/resources/previews/025/474/309/large_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg",
      bio: "Expert in software architecture and cloud technologies",
      description: "Jessica Lee brings deep technical expertise in cloud architecture, microservices, and distributed systems. With a PhD in Computer Science and 12+ years of hands-on experience, she has architected solutions for millions of users. Jessica previously led engineering teams at major tech companies and has multiple patents in cloud computing. She's an advocate for clean code practices and believes in building scalable, maintainable systems. In her free time, she contributes to open-source projects and mentors women in tech.",
      email: "jessica.lee@company.com",
      phone: "+1 (555) 234-5678",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Marcus Brown",
      role: "Lead Developer",
      image: "https://thumbs.dreamstime.com/b/portrait-business-happy-black-man-laptop-accounting-office-night-smile-auditor-confident-employee-computer-404122180.jpg",
      bio: "Full-stack developer passionate about building scalable solutions",
      description: "Marcus Brown is a full-stack developer with expertise in modern JavaScript frameworks, cloud technologies, and database design. With 10 years of experience, he has successfully delivered numerous high-impact projects. Marcus specializes in React, Node.js, and AWS infrastructure. He's known for his problem-solving skills and ability to translate complex requirements into elegant solutions. Marcus is also a tech blogger and has spoken at several developer conferences about best practices in software development.",
      email: "marcus.brown@company.com",
      phone: "+1 (555) 345-6789",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Sophia Martinez",
      role: "UX/UI Designer",
      image: "https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=612x612&w=0&k=20&c=Wd2vTDd6tJ5SeEY-aw0WL0bew8TAkyUGVvNQRj3oJFw=",
      bio: "Creative designer focused on user-centered design principles",
      description: "Sophia Martinez is an award-winning UX/UI designer with a passion for creating intuitive, beautiful user experiences. With 8 years in the industry, she has worked with startups and established brands to reimagine their digital presence. Sophia's design philosophy centers on empathy, accessibility, and data-driven decisions. She holds a Master's in Human-Computer Interaction and has won multiple design awards. Sophia regularly conducts design workshops and is committed to making the web more accessible for everyone.",
      email: "sophia.martinez@company.com",
      phone: "+1 (555) 456-7890",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Ryan Kim",
      role: "Marketing Director",
      image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      bio: "Digital marketing strategist driving brand growth",
      description: "Ryan Kim is a results-driven marketing professional with expertise in digital strategy, content marketing, and brand development. Over his 9-year career, he's helped scale multiple companies from startups to market leaders. Ryan's data-driven approach combines creativity with analytics to deliver measurable results. He specializes in SEO, social media marketing, and growth hacking. Ryan holds certifications in Google Analytics and HubSpot and frequently writes about marketing trends on his blog.",
      email: "ryan.kim@company.com",
      phone: "+1 (555) 567-8901",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Emma Wilson",
      role: "Project Manager",
      image: "https://i.pinimg.com/originals/e4/39/54/e4395494e82f2706e15d2c855f3c0e60.jpg",
      bio: "Agile expert ensuring timely project delivery",
      description: "Emma Wilson is a certified Scrum Master and PMP with 11 years of experience managing complex technology projects. She excels at coordinating cross-functional teams, managing stakeholder expectations, and delivering projects on time and within budget. Emma's agile approach emphasizes collaboration, transparency, and continuous improvement. She has successfully managed projects ranging from mobile app launches to enterprise system migrations. Emma is passionate about team dynamics and regularly facilitates workshops on agile methodologies.",
      email: "emma.wilson@company.com",
      phone: "+1 (555) 678-9012",
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.ceil(team.length / itemsPerView) - 1;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [itemsPerView, team.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  const nextSlide = () => {
    const maxIndex = Math.ceil(team.length / itemsPerView) - 1;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.ceil(team.length / itemsPerView) - 1;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleTeam = team.slice(
    currentIndex * itemsPerView,
    (currentIndex + 1) * itemsPerView
  );

  const totalSlides = Math.ceil(team.length / itemsPerView);

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Meet Our Team
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Talented professionals dedicated to your success
          </p>
        </motion.div>

        <div className="relative px-2 sm:px-4 md:px-6 lg:px-12">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
              >
                {visibleTeam.map((member, index) => (
                  <div
                    key={`${currentIndex}-${index}`}
                    onClick={() => setSelectedMember(member)}
                    className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="relative w-full h-40 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-3 sm:p-4 md:p-5 lg:p-6 text-center">
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-xs md:text-sm lg:text-base text-blue-600 font-semibold mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3">
                        {member.role}
                      </p>
                      <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Desktop & Tablet */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-6 bg-white p-2 md:p-2.5 lg:p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 items-center justify-center z-10"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-6 bg-white p-2 md:p-2.5 lg:p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 items-center justify-center z-10"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex sm:hidden justify-between mt-4 px-2">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-7 md:mt-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 sm:w-7 md:w-8 bg-blue-600' : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8"
            onClick={() => setSelectedMember(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-2/5 lg:w-1/3">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-48 sm:h-56 md:h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 lg:w-2/3 p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="mb-3 sm:mb-4 md:mb-5">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">
                      {selectedMember.name}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-600 font-semibold mb-2 sm:mb-3 md:mb-4">
                      {selectedMember.role}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                      {selectedMember.description}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-2 sm:space-y-2.5 md:space-y-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="flex items-center text-xs sm:text-sm md:text-base text-gray-600">
                      <span className="font-semibold mr-2">Email:</span>
                      <a href={`mailto:${selectedMember.email}`} className="text-blue-600 hover:underline">
                        {selectedMember.email}
                      </a>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm md:text-base text-gray-600">
                      <span className="font-semibold mr-2">Phone:</span>
                      <a href={`tel:${selectedMember.phone}`} className="text-blue-600 hover:underline">
                        {selectedMember.phone}
                      </a>
                    </div>
                  </div>

                  {/* Social Links */}
                  {/* <div className="flex gap-2 sm:gap-3 md:gap-4">
                    <a
                      href={selectedMember.linkedin}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    </a>
                    <a
                      href={selectedMember.twitter}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    </a>
                    <a
                      href={selectedMember.github}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    </a>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Team;