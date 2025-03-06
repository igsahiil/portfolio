import { motion } from 'framer-motion';
import { DiNodejs, DiReact, DiLaravel, DiPhp, DiMongodb, DiMysql, DiGithubBadge, DiWordpress, DiAws } from 'react-icons/di';
import { SiNestjs } from 'react-icons/si';

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: DiNodejs, proficiency: 90 },
      { name: "NestJS", icon: SiNestjs, proficiency: 85 },
      { name: "Laravel", icon: DiLaravel, proficiency: 88 },
      { name: "Core PHP", icon: DiPhp, proficiency: 92 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: DiReact, proficiency: 90 },
      { name: "WordPress", icon: DiWordpress, proficiency: 85 },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "MongoDB", icon: DiMongodb, proficiency: 88 },
      { name: "MySQL", icon: DiMysql, proficiency: 90 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "AWS", icon: DiAws, proficiency: 85 },
      { name: "GitHub", icon: DiGithubBadge, proficiency: 92 },
    ],
  },
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const SkillBar = ({ name, icon: Icon, proficiency }) => {
  return (
    <motion.div 
      className="mb-6 last:mb-0"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6 text-blue-400 mr-2" />
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="ml-auto text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white">Technical Skills</h2>
          <p className="mt-4 text-lg text-gray-400">Technologies I work with</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    icon={skill.icon}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-gray-900 rounded-xl p-6 border border-gray-700"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Additional Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['RESTful APIs', 'Microservices', 'CI/CD', 'Docker'].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
