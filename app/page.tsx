import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl w-full">
          
          {/* Status Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300">
            <span className="mr-2 h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Building Vessel
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Bridging <span className="text-blue-500">Infrastructure</span> <br />
            & Modern DevOps.
          </h1>

          {/* Subheadline / Mission */}
          <p className="mt-6 max-w-2xl text-xl text-gray-400 leading-relaxed">
            I am an IT Professional with 12 years of experience, now specializing in 
            cloud automation, containerization, and data engineering pipelines. 
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
            >
              View Selected Work
            </Link>
            <Link
              href="https://github.com/tbuckets-dev"
              target="_blank"
              className="rounded-md border border-gray-700 bg-gray-900 px-6 py-3 text-sm font-semibold text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
            >
              Check GitHub Profile
            </Link>
          </div>

          {/* Tech Stack Highlights */}
          <div className="mt-20 border-t border-gray-800 pt-10">
            <p className="text-sm font-medium text-gray-500 mb-6">CURRENTLY ENGINEERING WITH</p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Simple text placeholders for logos - we can add SVG logos later */}
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <span className="font-mono font-semibold">Docker</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="font-mono font-semibold">Python</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
                <span className="font-mono font-semibold">Kubernetes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-white rounded-full"></div>
                <span className="font-mono font-semibold">Next.js</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}