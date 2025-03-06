import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "E-commerce Admin Panel",
    description: "A Front-end design of e-commerce website admin panel, using React Vite.",
    tech: ["React", "VITE","TAILWIND","AWS"],
    github: "https://github.com/igsahiil/reactSphear",
    demo: "react-sphear-netlify.app",
  },
  {
    title: "CHITCHAT",
    description: "Chitchat is real time messaging service web app. created using React Vite, NodeJS and socket.",
    tech: ["Socket.IO", "NodeJS", "MongoDB", "React"],
    github: "https://github.com/igsahiil/chitchat",
    demo: "https://chit-chatweb.netlify.app",
  },
  {
    title: "Portfolio Website",
    description: "Create a simple portfolio website using React Vite and Tailwind CSS.",
    tech: ["React", "VITE","TAILWIND"],
    github: "https://github.com/igsahiil/portfolio",
    demo: "react-sphear-netlify.app",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white">Projects</h2>
          <p className="mt-4 text-lg text-gray-400">Check out some of my recent work</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-4 h-24">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-blue-900/30 text-blue-200 rounded-full border border-blue-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-800/50 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors duration-300"
                  >
                    <FiGithub size={16} />
                    View Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors duration-300"
                  >
                    Live Demo
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
