import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "../components/Section";
import { profile } from "../data/profile";
import { socialLinks } from "../data/socialLinks";
import Typewriter from "../components/Typewriter";
import { SiPython, SiTensorflow, SiAmazon, SiReact, SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <Section id="home" className="min-h-[80vh] flex items-center">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <motion.p
            className="text-sm uppercase tracking-widest text-primary-300/80"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-primary-400 to-cyan-300 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.div
            className="mt-3 text-lg sm:text-xl text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
          >
            <Typewriter
              words={["AI & ML Enthusiast", "Full Stack Developer", "Cloud & Data Engineer"]}
            />
          </motion.div>

          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind CSS", "Framer Motion"].map((t) => (
              <span
                key={t}
                className="text-xs rounded-md bg-slate-100 text-slate-700 px-2 py-1 ring-1 ring-slate-200 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          <motion.div
            className="mt-4 flex items-center gap-4 text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <SiPython className="opacity-80" size={20} />
            <SiTensorflow className="opacity-80" size={20} />
            <SiReact className="opacity-80" size={20} />
            <SiTypescript className="opacity-80" size={20} />
            <SiAmazon className="opacity-80" size={20} />
          </motion.div>

          <motion.p
            className="mt-4 text-slate-700 dark:text-slate-300 max-w-prose"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {profile.summary}
          </motion.p>

          <motion.p
            className="mt-3 text-slate-700 dark:text-slate-300 italic max-w-prose"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            "I build intelligent solutions that combine creativity, code, and data to make technology human-centered."
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href={socialLinks.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              Download Resume
            </a>

            <div className="ml-2 flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            <div className="w-full text-sm text-slate-600 dark:text-slate-400 mt-4">
              <div>{profile.location}</div>
              <div className="flex gap-3 mt-1">
                <a href={`mailto:${profile.email}`} className="hover:text-slate-900 dark:hover:text-slate-200 transition">{profile.email}</a>
                <span>•</span>
                <a href={`tel:${socialLinks.phone}`} className="hover:text-slate-900 dark:hover:text-slate-200 transition">{socialLinks.phone}</a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="order-first md:order-last"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
        <div className="relative mx-auto h-60 w-60 sm:h-96 sm:w-96 md:h-[24rem] md:w-[20rem]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-500/30 to-indigo-400/20 blur-2xl" />
          
          <div className="relative h-full w-full rounded-2xl ring-1 ring-white/10 bg-slate-900/50 backdrop-blur flex items-center justify-center overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt={`${profile.name} profile`}
                className="h-full w-full object-cover object-top rounded-2xl"
              />
          </div>
        </div>


        </motion.div>
      </div>
    </Section>
  );
}
