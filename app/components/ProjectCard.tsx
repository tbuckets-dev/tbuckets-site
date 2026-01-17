import { Project } from "../lib/projects";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-md transition-all hover:border-blue-500 hover:shadow-blue-500/20">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400">
            {project.title}
          </h3>
          <span className="rounded-full bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-800">
            {project.category}
          </span>
        </div>
        
        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.link && (
        <div className="mt-8">
          <Link 
            href={project.link} 
            target="_blank"
            className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            View Code &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}