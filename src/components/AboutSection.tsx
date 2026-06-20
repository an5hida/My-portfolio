import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Code2, Calendar, CheckCircle2 } from 'lucide-react';
import { profile, education, techStack, experience, certifications } from '../data';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-accentBlue font-semibold">
            Get to know me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            About <span className="gradient-text-static">Me</span>
          </h2>
        </motion.div>

        {/* Bio card */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass rounded-3xl p-6 sm:p-10 mb-8"
        >
          <p className="text-base sm:text-lg text-white/80 leading-relaxed text-center mb-8">
            {profile.tagline}
          </p>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-subtle rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/30 to-accentBlue/30 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-white">Education</h3>
              </div>
              <div className="text-sm text-accent font-semibold mb-1">{education.degree}</div>
              <div className="text-white/80 text-sm mb-2">{education.university}</div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Calendar className="w-3.5 h-3.5" />
                {education.year}
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-accentBlue font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {education.status}
                </span>
              </div>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-subtle rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/30 to-accentBlue/30 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-white">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6 mt-12">
            <Briefcase className="w-6 h-6 text-accent" />
            <h3 className="text-2xl sm:text-3xl font-bold">
              <span className="gradient-text-static">Experience</span>
            </h3>
          </div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {experience.map((exp) => (
              <motion.div
                key={exp.role}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">{exp.role}</h4>
                    <p className="text-sm text-accentBlue">{exp.company}</p>
                  </div>
                  <span className="text-xs text-white/60 whitespace-nowrap glass-subtle rounded-full px-3 py-1">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6 mt-12">
            <Award className="w-6 h-6 text-accent" />
            <h3 className="text-2xl sm:text-3xl font-bold">
              <span className="gradient-text-static">Certifications</span>
            </h3>
          </div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="glass rounded-xl p-4 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/30 to-accentBlue/30 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-accentBlue font-semibold mb-1">
                    Certification {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm text-white/80 leading-snug">{cert}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
