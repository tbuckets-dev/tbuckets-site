import { Metadata } from "next";
import { projects } from "../lib/projects";
import ProjectCard from "../components/ProjectCard";
import ContactCta from "../components/ContactCta";

export const metadata: Metadata = {
  title: "Projects",
  description: "DevOps architectures, full-stack applications, and system designs by T.Buckets.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-bg px-4 py-24 text-fg">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            Selected Work
          </h1>
          <p className="mt-4 text-lg text-muted">
            A collection of DevOps architectures, full-stack applications, and system designs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-24">
        <ContactCta />
      </div>
    </main>
  );
}
