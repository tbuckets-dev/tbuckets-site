import Link from "next/link";

export default function LivePitPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white pb-24">
      {/* Hero Header */}
      <section className="relative border-b border-gray-800 bg-gray-900/50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/projects" className="text-sm font-medium text-blue-400 hover:text-blue-300 mb-6 block">
            ← Back to Projects
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            F1 Pit Window Predictor
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl">
            An automated data pipeline that ingests telemetry data to predict tire degradation and optimal pit stops in real-time.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://github.com/tbuckets-dev/live-pit" // Make sure this matches your actual repo
              target="_blank"
              className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-all"
            >
              View Repository
            </Link>
            <span className="inline-flex items-center rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300">
              Status: In Development
            </span>
          </div>
        </div>
      </section>

      {/* Content Container */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* The Challenge */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
          <p className="text-gray-300 leading-relaxed">
            Formula 1 strategy relies heavily on understanding tire degradation ("deg"). However, deg is non-linear and affected by track temperature, fuel load, and traffic. 
            The goal was to build a system that could ingest raw lap time data and visualize the "crossover point"—the exact moment a new set of tires becomes faster than the current set.
          </p>
        </div>

        

        {/* The Architecture (DevOps Focus) */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">System Architecture</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <span className="font-mono text-blue-400">01. Ingestion</span>
                <span>Python scripts pull telemetry from the OpenF1 API, containerized in Docker for consistency.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-blue-400">02. Storage</span>
                <span>Raw JSON is processed and normalized into a PostgreSQL database schema designed for time-series queries.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-blue-400">03. Orchestration</span>
                <span>Apache Airflow (running in Docker Compose) schedules the ingestion jobs and manages dependencies.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-blue-400">04. Analysis</span>
                <span>Pandas & Scikit-learn models calculate the deg curve and predict the pit window.</span>
              </li>
            </ul>
          </div>
          
          {/* Tech Stack Sidebar */}
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Docker", "Airflow", "PostgreSQL", "Pandas", "MLflow"].map((tech) => (
                <span key={tech} className="rounded-md bg-gray-800 px-3 py-1 text-sm text-blue-200 border border-blue-900/50">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-2">Key Learnings</h3>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
                <li>Managing Airflow DAGs in a containerized environment.</li>
                <li>Handling API rate limits and data normalization.</li>
                <li>Designing idempotent data pipelines.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Snippet Highlight */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Ingestion Logic</h2>
            <div className="rounded-lg bg-gray-900 border border-gray-800 p-4 font-mono text-sm overflow-x-auto text-gray-300">
                <p className="text-gray-500 mb-2"># Example: Dockerized ingestion script snippet</p>
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
    </main>
  );
}