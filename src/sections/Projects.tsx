import Section from "../components/Section";
import ProjectCard, { type Project } from "../components/ProjectCard";
import { projects as data } from "../data/projects";

export default function Projects() {
  // adapt data shape to ProjectCard's expected props
  const projects: Project[] = data.map((p) => ({
    title: p.title,
    description: p.description,
    tags: p.tags,
    live: p.live,
    repo: p.repo
  }));

  return (
    <Section id="projects" heading="Projects" subheading="Selected work">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
