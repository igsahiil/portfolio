import { motion } from 'framer-motion';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

const experiences = [
  {
    title: "Full Stack Developer + DevOps Engineer",
    company: "iMaker Technologies Pvt Ltd",
    period: "March 2024 - Present",
    location: "Gandhinagar, Gujarat",
    description: "Leading full-stack development projects and mentoring team members. Managing CI/CD pipelines nad deployment",
    highlights: [
      "Developed scalable microservices using NestJS and MongoDB",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Led team of 3 developers across multiple projects",
      "Integrated AWS services for cloud infrastructure"
    ],
    skills: ["React", "Node.js", "NestJS", "MongoDB", "AWS"]
  },
  {
    title: "IT Developer",
    company: "Innovate Green Technologies Pvt Ltd",
    period: "Sep 2022 - March 2024",
    location: "Ahmedabad, India",
    description: "Worked on enterprise-level applications and e-commerce platforms.",
    highlights: [
      "Built custom Shopify plugins and themes",
      "Developed custom functions using Core PHP",
      "Optimized database queries improving performance by 30%",
    ],
    skills: ["CorePHP", "Shopify", "MySQL", "HTML", "CSS"]
  },
  {
    title: "Web Developer",
    company: "Delta Infotech",
    period: "Jan 2018 - Dec 2020",
    location: "Gandhinagar, Gujarat, India",
    description: "Focused on front-end development and UI/UX improvements.",
    highlights: [
      "Created interactive web applications using Wordpress",
      "Developed custom PHP solutions",
      "Improved website load times by 50%",
      "Implemented mobile-first design approaches"
    ],
    skills: ["Wordpress", "PHP", "MySQL", "HTML/CSS"]
  }
];

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
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 }
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white">Experience</h2>
          <p className="mt-4 text-lg text-gray-400">My professional journey</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-700" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Point */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900" />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <HiOutlineBriefcase className="text-blue-400 text-2xl" />
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  </div>

                  <div className="mb-4">
                    <div className="text-blue-400 font-medium">{exp.company}</div>
                    <div className="text-gray-400 flex items-center gap-2 mt-1">
                      <span>{exp.period}</span>
                      <span className="text-gray-600">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-gray-400"
                      >
                        <BsArrowRight className="mt-1.5 text-blue-400 flex-shrink-0" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-gray-900/50 text-blue-300 rounded-full border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
