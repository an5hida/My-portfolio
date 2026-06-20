import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { projects } from '../data';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-accentBlue font-semibold">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Featured <span className="gradient-text-static">Projects</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
            A selection of real projects I've built — spanning web development, machine learning, and AI-powered mobile apps.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl overflow-hidden group flex flex-col"
            >
              {/* Project image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 glass-strong rounded-full w-9 h-9 flex items-center justify-center">
                  <FolderGit2 className="w-4 h-4 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass-subtle rounded-full px-2.5 py-0.5 text-[11px] font-medium text-accentBlue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-subtle rounded-xl px-4 py-2.5 text-sm font-medium text-white hover:text-accent transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
