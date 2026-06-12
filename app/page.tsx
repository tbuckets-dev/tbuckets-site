import Link from "next/link";
import { projects } from "./lib/projects";
import ProjectCard from "./components/ProjectCard";
import ContactCta from "./components/ContactCta";

const stats = [
  { value: "12+", label: "years in enterprise IT" },
  { value: "60+", label: "client environments managed" },
  { value: "24/7", label: "on-call & disaster recovery veteran" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-fg selection:bg-primary/30">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-5 py-20 sm:py-24">

        {/* Background grid, faded toward the bottom */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--border))_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_30%,transparent_75%)]" />

        <div className="relative mx-auto max-w-6xl">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-sm font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Available for DevOps roles
          </span>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-fg sm:text-6xl">
            I keep production running.{" "}
            <span className="text-primary">12 years of enterprise IT</span>, now
            building modern DevOps pipelines.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            I&rsquo;ve managed the servers, networks, and disaster recovery for 60+
            businesses &mdash; the 3&nbsp;AM pages included. Today I apply that
            operational discipline to Docker, Terraform, CI/CD, and AWS.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-primary-strong px-6 py-3 text-center text-sm font-semibold text-on-primary transition-colors hover:bg-primary-hover sm:w-auto"
            >
              Get in touch
            </Link>
            <Link
              href="/projects"
              className="w-full rounded-lg border border-line px-6 py-3 text-center text-sm font-semibold text-fg transition-colors hover:border-muted sm:w-auto"
            >
              View projects &rarr;
            </Link>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl font-bold text-fg">{value}</dd>
                <dd className="text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="border-t border-line bg-surface/50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-9 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-fg">Featured work</h2>
            <Link href="/projects" className="text-sm font-semibold text-primary hover:text-primary-hover">
              All projects &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
