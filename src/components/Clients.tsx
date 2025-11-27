import { motion } from 'framer-motion';
import './Clients.css';

function Clients() {
  const clients = [
    { name: "TechCorp", logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "InnovateLabs", logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Digital Solutions", logo: "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "CloudNext", logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "DataFlow", logo: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "SmartTech", logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "FutureSoft", logo: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "WebPro", logo: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" }
  ];

  return (
    <section className="clients">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Trusted By Industry Leaders</h2>
          <p className="section-subtitle">
            Partnering with businesses worldwide to deliver exceptional results
          </p>
        </motion.div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="client-card"
            >
              <div className="client-logo-wrapper">
                <img src={client.logo} alt={client.name} className="client-logo" />
                <div className="client-overlay">
                  <span className="client-name">{client.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
