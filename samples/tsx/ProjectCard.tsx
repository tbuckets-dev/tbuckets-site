import Link from 'next/link';
import { Project } from '../lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const external = project.link?.startsWith('http');

  const card = (
    <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-fg group-hover:text-primary">
          {project.title}
        </h3>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {project.category}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
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
          {external ? 'View on GitHub' : 'Read case study'} &rarr;
        </span>
      )}
    </div>
  );

  if (!project.link) return card;

  return (
    <Link
      href={project.link}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block h-full"
    >
      {card}
    </Link>
  );
}
