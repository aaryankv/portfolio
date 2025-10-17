import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="card group flex flex-col justify-between hover:ring-slate-300/60 dark:hover:ring-white/20 transition"
    >
      {/* Media/cover */}
      <div className="project-media mb-4" aria-hidden="true" />

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="text-xs rounded-md bg-slate-100 text-slate-700 px-2 py-1 ring-1 ring-slate-200 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs"
            aria-label={`${project.title} Live Demo`}
          >
            <FaExternalLinkAlt className="opacity-80" />
            Live
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs"
            aria-label={`${project.title} GitHub Repository`}
          >
            <FaGithub className="opacity-80" />
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}
