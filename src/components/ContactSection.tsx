import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Download, Send } from 'lucide-react';
import { profile } from '../data';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactSection() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(profile.location)}`,
    },
  ];

  const socials = [
    { icon: Github, href: profile.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.linkedinUrl, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ];

  return (
    <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-accentBlue font-semibold">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Contact <span className="gradient-text-static">Me</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
            Open to internships, freelance opportunities, and collaboration. Let's build something meaningful together.
          </p>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-10 md:p-12">
          {/* Contact info grid */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-3 gap-4 mb-10"
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
                className="glass-subtle rounded-2xl p-5 text-center flex flex-col items-center gap-2"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/30 to-accentBlue/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-accentBlue font-semibold">
                  {label}
                </div>
                <div className="text-sm text-white break-all">{value}</div>
              </motion.a>
            ))}
          </motion.div>

          {/* Social buttons */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/15"></div>

            <motion.a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary-glass"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>

            <motion.a
              href={`mailto:${profile.email}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-glass"
            >
              <Send className="w-4 h-4" />
              Send Email
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {profile.name}. Built with React, Three.js & Framer Motion.
        </p>
      </div>
    </section>
  );
}
