import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false); // For custom popup

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'email', 'subject', 'message'];
    const emptyField = requiredFields.find(field => !formData[field].trim());

    if (emptyField) {
      setShowModal(true); // Show custom modal
      return;
    }

    setSending(true);
    setError('');

    const serviceId = 'service_4i1nq6t';
    const templateId = 'template_xsq0kcx';
    const publicKey = 'xKt5FIV8spzF_UTfH';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_name: 'DottCiblez Team',
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitted(true);
      setSending(false);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send message. Please try again.');
      setSending(false);
    }
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
              Get In Touch
            </h2>
            <p className="section-subtitle text-center">
              Have a project in mind? We'd love to hear from you
            </p>
          </motion.div>

          <div className="contact-wrapper">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-info"
            >
              <h3 className="contact-info-title">Let's Talk</h3>
              <p className="contact-info-text">
                Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="detail-icon"><FaEnvelope /></div>
                  <div className="detail-content">
                    <h4>Email Us</h4>
                    <p><a href="mailto:info@dottciblez.com" className="font-bold">info@dottciblez.com</a></p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon"><FaPhone /></div>
                  <div className="detail-content">
                    <h4>Call Us</h4>
                    <p>+91 6744521891</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon"><FaMapMarkerAlt /></div>
                  <div className="detail-content">
                    <h4>Visit Us</h4>
                    <p>Unit 126, 1st floor, DLF cybercity, Infocity park, Patia, Bhubaneswar, 751024</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="success-message"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="error-message"
                >
                  {error}
                </motion.div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    disabled={sending}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    disabled={sending}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    disabled={sending}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    disabled={sending}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Your Message * (max 200 characters)</span>
                  <span className="text-sm text-gray-500">{formData.message.length}/200</span>
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => {
                    if (e.target.value.length <= 200) {
                      handleChange(e);
                    }
                  }}
                  required
                  rows={6}
                  className="form-input form-textarea"
                  maxLength={200}
                  disabled={sending}
                />
              </div>

              <button type="submit" className="form-submit" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'} <FaPaperPlane className="ml-2" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Custom Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              >
                <FaTimes size={24} />
              </button>

              <div className="text-center">
                <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Missing Information</h3>
                <p className="text-gray-600 mb-8">
                  Please fill in all required fields (Name, Email, Subject, and Message) before submitting.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Contact;