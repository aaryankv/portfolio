import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { socialLinks } from "../data/socialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 mt-20">
      <div className="container py-10 grid gap-6 sm:grid-cols-2 items-center">
        <div className="space-y-1 text-sm">
          <div className="text-slate-900 dark:text-slate-300 font-medium">{socialLinks.name}</div>
          <div className="text-slate-600 dark:text-slate-400">{socialLinks.location}</div>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
            >
              <FaEnvelope className="opacity-80" /> {socialLinks.email}
            </a>
            <a
              href={`tel:${socialLinks.phone}`}
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
            >
              <FaPhone className="opacity-80" /> {socialLinks.phone}
            </a>
          </div>
        </div>
        <div className="sm:justify-self-end flex items-center gap-3">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="btn-secondary text-xs"
          >
            <FaGithub className="opacity-80" /> GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="btn-secondary text-xs"
          >
            <FaLinkedin className="opacity-80" /> LinkedIn
          </a>
          <a
            href={socialLinks.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="container pb-8 text-center text-xs text-slate-600 dark:text-slate-500">
        © {new Date().getFullYear()} {socialLinks.name}. All rights reserved.
      </div>
    </footer>
  );
}
