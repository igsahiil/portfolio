import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: 'Email',
    value: 'saahil.parmarr@gmail.com',
    link: 'mailto:saahil.parmarr@gmail.com',
  },
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: '+91 98750 32388',
    link: 'tel:+919875032388',
  },
  {
    icon: HiOutlineLocationMarker,
    label: 'Location',
    value: 'Gandhinagar, Gujarat, India',
    link: 'https://www.google.com/maps/place/Gandhinagar,+Gujarat/@23.2207097,72.6455481',
  },
];

const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    link: 'https://github.com/igsahiil/',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/sahil-parmar-aab013261',
  },
  {
    icon: IoLogoWhatsapp,
    label: 'WhatsApp',
    link: 'https://wa.me/919875032388',
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    link: 'https://instagram.com/ig.sahiil',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Create a service in EmailJS and put the service ID here
        'YOUR_TEMPLATE_ID', // Create an email template and put the template ID here
        {
          to_email: 'saahil.parmarr@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Your EmailJS public key
      );

      if (result.status === 200) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-400">Let's create something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-focus-within:w-full transition-all duration-300" />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              
              {status.error && (
                <div className="text-red-500 text-sm">{status.error}</div>
              )}
              
              {status.submitted && (
                <div className="text-green-500 text-sm">Message sent successfully!</div>
              )}

              <motion.button
                type="submit"
                disabled={status.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg px-6 py-3 font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ${
                  status.submitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
