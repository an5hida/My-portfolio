import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download, ArrowRight, Sparkles } from 'lucide-react';
import { profile, floatingChips } from '../data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="glass rounded-full px-5 py-2 text-xs sm:text-sm font-medium inline-flex items-center gap-2 text-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {profile.status}
          </span>
        </motion.div>

        {/* Profile image with glass glow */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8 group"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 via-secondary/20 to-accentBlue/30 rounded-full blur-2xl opacity-70 animate-pulse-glow"></div>
          <div className="profile-ring relative">
            <img
              src={profile.profileImage}
              alt={profile.name}
              loading="eager"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover relative z-10"
            />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-accent animate-pulse" />
        </motion.div>

        {/* Name + Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-accentBlue font-medium mb-6"
        >
          {profile.title}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-sm sm:text-base text-white/70 mb-10 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 w-full sm:w-auto"
        >
          <motion.a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary-glass w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-glass w-full sm:w-auto"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-glass w-full sm:w-auto"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social links + contact info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          <div className="flex gap-3">
            {[
              { icon: Github, href: profile.github, label: 'GitHub' },
              { icon: Linkedin, href: profile.linkedinUrl, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="glass w-11 h-11 rounded-full flex items-center justify-center text-white hover:text-accent transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/15"></div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 text-sm text-white/70">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {profile.location}
            </span>
          </div>
        </motion.div>

        {/* Floating stat chips */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
          {floatingChips.map((chip, i) => (
            <motion.div
              key={chip.label}
              variants={chipVariants}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="glass rounded-2xl px-5 py-3 text-left"
            >
              <div className="text-[10px] uppercase tracking-wider text-accentBlue font-semibold mb-0.5">
                {chip.label}
              </div>
              <div className="text-sm font-medium text-white">{chip.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="scroll-indicator"></div>
        <span className="text-[10px] text-white/40 uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
}
