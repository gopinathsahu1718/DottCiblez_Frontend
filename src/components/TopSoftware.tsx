import { Code, Smartphone, Globe, Database, Cloud, Cpu } from 'lucide-react';

const software = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Scalable online stores with seamless checkout",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Robust database architecture and management",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Reliable cloud infrastructure and deployment",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Smart automation and machine learning solutions",
    color: "from-violet-500 to-purple-500"
  }
];

const TopSoftware = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in cutting-edge technologies to deliver exceptional solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {software.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopSoftware;
