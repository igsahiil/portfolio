import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-32 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background gradient effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-blue-400 font-bold text-xl mb-4">Hello, I'm Sahil Parmar</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Full Stack
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Developer
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 text-lg md:text-xl mb-8"
            >
              Crafting robust web applications with modern technologies like React, Node.js, and Laravel.
              Transforming ideas into seamless digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4"
            >
              <a 
                href="#contact" 
                className="px-8 py-3 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-1"
              >
                Get in touch
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-gray-800 text-center text-white rounded-full font-medium hover:bg-gray-700 border border-gray-700 transition-all duration-200 transform hover:-translate-y-1"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Animated Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-80 h-80 mx-auto"
              >
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20"></div>
                <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 rotate-45"></div>
                <div className="absolute inset-0 rounded-full border-2 border-pink-500/20 -rotate-45"></div>
              </motion.div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-45 blur-xl opacity-30"></div>
                  <div className="absolute inset-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-45"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
