import { projects } from "../lib/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-950 px-4 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Selected Work
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            A collection of DevOps architectures, full-stack applications, and system designs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}