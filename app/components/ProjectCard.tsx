import Link from "next/link";
import { Project, ProjectStatus } from "../lib/projects";

const statusStyles: Record<ProjectStatus, string> = {
  Active: "text-primary bg-primary/10",
  Building: "text-accent bg-accent/10",
  Concept: "text-muted bg-muted/10",
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const external = project.link?.startsWith("http");

  const card = (
    <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary">
      <div className="flex items-center gap-3 text-xs text-faint">
        <span>{project.year}</span>
        <span className={`rounded-full px-3 py-1 font-semibold ${statusStyles[project.status]}`}>
          {project.status}
        </span>
      </div>

      <h3 className="mt-3 text-xl font-bold text-fg group-hover:text-primary">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md border border-line bg-surface-2 px-2 py-1 text-xs font-medium text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <span className="mt-6 text-sm font-semibold text-primary">
          {external ? "View on GitHub" : "Read case study"} &rarr;
        </span>
      )}
    </div>
  );

  if (!project.link) return card;

  return (
    <Link
      href={project.link}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block h-full"
    >
      {card}
    </Link>
  );
}
