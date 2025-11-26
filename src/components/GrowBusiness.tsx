import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './GrowBusiness.css'

function GrowBusiness() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-shadow-lg">
            Ready to Grow Your Business?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-7 md:mb-8 lg:mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed px-4">
            Join hundreds of successful businesses that trust DottCiblez to power their digital transformation
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "Consultation",
                description: "Free initial consultation to understand your needs"
              },
              {
                number: "02",
                title: "Strategy",
                description: "Custom roadmap tailored to your business goals"
              },
              {
                number: "03",
                title: "Implementation",
                description: "Expert execution with continuous communication"
              },
              {
                number: "04",
                title: "Success",
                description: "Ongoing support to ensure your continued growth"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl border-2 border-white/20 transition-all duration-300 hover:bg-white/15"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 md:mb-4 opacity-70">
                  {feature.number}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-xs md:text-sm lg:text-base opacity-90 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 lg:py-5 bg-white text-blue-600 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-bold cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl mt-4 sm:mt-6 md:mt-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey 
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default GrowBusiness;