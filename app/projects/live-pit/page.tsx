import Link from "next/link";
import { Metadata } from "next";
import ContactCta from "../../components/ContactCta";

export const metadata: Metadata = {
  title: "F1 Pit Window Predictor",
  description: "An automated data pipeline that ingests telemetry data to predict tire degradation and optimal pit stops in real-time.",
};

export default function LivePitPage() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      {/* Hero Header */}
      <section className="relative border-b border-line bg-surface/50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/projects" className="text-sm font-medium text-primary hover:text-primary-hover mb-6 block">
            ← Back to Projects
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            F1 Pit Window Predictor
          </h1>
          <p className="mt-4 text-xl text-muted max-w-2xl">
            An automated data pipeline that ingests telemetry data to predict tire degradation and optimal pit stops in real-time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://github.com/tbuckets-dev/live-pit"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary-strong px-5 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-hover transition-colors"
            >
              View Repository
            </Link>
            <span className="inline-flex items-center rounded-lg border border-line bg-surface-2 px-4 py-2 text-sm font-medium text-muted">
              Status: In Development
            </span>
          </div>
        </div>
      </section>

      {/* Content Container */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        {/* The Challenge */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-fg mb-4">The Challenge</h2>
          <p className="text-muted leading-relaxed">
            Formula 1 strategy relies heavily on understanding tire degradation (&quot;deg&quot;). However, deg is non-linear and affected by track temperature, fuel load, and traffic.
            The goal was to build a system that could ingest raw lap time data and visualize the &quot;crossover point&quot;&mdash;the exact moment a new set of tires becomes faster than the current set.
          </p>
        </div>

        {/* The Architecture (DevOps Focus) */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-fg mb-4">System Architecture</h2>
            <ul className="space-y-4 text-muted">
              <li className="flex gap-3">
                <span className="font-mono text-primary">01. Ingestion</span>
                <span>Python scripts pull telemetry from the OpenF1 API, containerized in Docker for consistency.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-primary">02. Storage</span>
                <span>Raw JSON is processed and normalized into a PostgreSQL database schema designed for time-series queries.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-primary">03. Orchestration</span>
                <span>Apache Airflow (running in Docker Compose) schedules the ingestion jobs and manages dependencies.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-primary">04. Analysis</span>
                <span>Pandas & Scikit-learn models calculate the deg curve and predict the pit window.</span>
              </li>
            </ul>
          </div>

          {/* Tech Stack Sidebar */}
          <div className="rounded-xl border border-line bg-surface p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Docker", "Airflow", "PostgreSQL", "Pandas", "MLflow"].map((tech) => (
                <span key={tech} className="rounded-md bg-surface-2 px-3 py-1 text-sm text-muted border border-line">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-fg mb-2">Key Learnings</h3>
              <ul className="list-disc list-inside text-sm text-muted space-y-2">
                <li>Managing Airflow DAGs in a containerized environment.</li>
                <li>Handling API rate limits and data normalization.</li>
                <li>Designing idempotent data pipelines.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Snippet Highlight */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-fg mb-4">Ingestion Logic</h2>
            <div className="rounded-lg bg-surface border border-line p-4 font-mono text-sm overflow-x-auto text-muted">
                <p className="text-faint mb-2"># Example: Dockerized ingestion script snippet</p>
                <pre>{`def fetch_telemetry(session_key, driver_number):
    """
    Fetches lap data and normalizes for storage.
    Running inside Docker container 'ingest-worker-01'
    """
    endpoint = f"https://api.openf1.org/v1/laps?session_key={session_key}"
    response = requests.get(endpoint)

    if response.status_code == 200:
        data = normalize_laps(response.json())
        db.bulk_insert(data)
        logger.info(f"Ingested {len(data)} laps for Driver {driver_number}")
    else:
        logger.error("API Gateway Timeout")`}</pre>
            </div>
        </div>

      </div>

      <ContactCta
        heading="Want to talk about this build?"
        body="The same ingestion, orchestration, and reliability patterns apply to production infrastructure. I'm happy to walk through the architecture."
      />
    </main>
  );
}
