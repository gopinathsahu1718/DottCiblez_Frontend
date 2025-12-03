import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Contact from '../components/Contact';
import '../components/Contact.css'

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
}

const ContactUsPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const locations: Location[] = [
    {
      id: 1,
      name: "Dott Ciblez",
      address: "Unit 126, 1st floor, DLF cybercity, Infocity park, Patia, Bhubaneswar, 751024",
      phone: "+91 7077792764, +91 7077791446",
      email: "info@dottciblez.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935.2050666253112!2d85.80654519919739!3d20.349042400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e025984c55%3A0xee1fcd1f11e55141!2sDLF%20Cyber%20City!5e0!3m2!1sen!2sin!4v1764774578639!5m2!1sen!2sin"
    },
    {
      id: 2,
      name: "Headquarters - New York",
      address: "123 Business Ave, Manhattan, NY 10001",
      phone: "+1 (212) 555-0100",
      email: "ny@company.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
    },
    {
      id: 3,
      name: "West Coast Office - San Francisco",
      address: "456 Tech Boulevard, San Francisco, CA 94102",
      phone: "+1 (415) 555-0200",
      email: "sf@company.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555215143!2d-122.50764017832515!3d37.75767177951862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1234567890124!5m2!1sen!2sin"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-16">
      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            {/* Google Maps Embed */}
            <iframe
              src={locations[selectedLocation].mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          {/* Location Tabs */}
          <div className="bg-gray-50 border-t">
            <div className="flex overflow-x-auto">
              {locations.map((location, index) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(index)}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${selectedLocation === index
                    ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Location Details Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className={`bg-white rounded-lg shadow-md p-6 transition-all cursor-pointer ${selectedLocation === index ? 'ring-2 ring-blue-600' : ''
                }`}
              onClick={() => setSelectedLocation(index)}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{location.name}</h3>

              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{location.address}</p>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-gray-600 text-sm hover:text-blue-600">
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <a href={`mailto:${location.email}`} className="text-gray-600 text-sm hover:text-blue-600">
                    {location.email}
                  </a>
                </div>

                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{location.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      {/* <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h2>
          <p className="text-gray-600 text-center mb-8">Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Your message..."
              />
            </div>
            
            <button 
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>
      </div> */}
      <Contact />
    </div>
  );
};

export default ContactUsPage;