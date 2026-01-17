import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            12 Years of <span className="text-blue-500">Uptime</span>.
          </h1>
          <div className="mt-8 text-xl leading-8 text-gray-300">
            <p className="mb-6">
              I am not just a developer; I am an IT veteran. For over a decade, I have managed the 
              physical and virtual infrastructure that keeps businesses running. I have fixed servers at 3 AM, 
              managed enterprise networks, and solved critical outages.
            </p>
            <p>
              Now, I am applying that operational discipline to <strong>DevOps</strong>. I build systems 
              that aren't just "cool"—they are resilient, scalable, and maintainable.
            </p>
          </div>
        </div>
      </section>

      {/* The Vessel Concept */}
      <section className="bg-gray-900 border-y border-gray-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-2">The Vessel Vision</h2>
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
          <div className="lg:col-span-2 text-gray-400 leading-relaxed">
            <p className="mb-4">
              <strong>Vessel</strong> is more than a portfolio; it is the holding company for my future ventures.
            </p>
            <p>
              My goal is to integrate distinct verticals—Technology, Software Development, and Property Management—under 
              one unified operational philosophy. Whether I am architecting a cloud environment or managing a physical asset, 
              the principles remain the same: automation, efficiency, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12">Technical Arsenal</h2>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            
            {/* Left Column: Modern DevOps */}
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
                <span>⚡</span> Modern DevOps
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  Docker & Containerization
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  CI/CD (GitHub Actions)
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  Python & Scripting
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  Next.js & React
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  Apache Airflow
                </li>
              </ul>
            </div>

            {/* Right Column: Core Infrastructure */}
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 hover:border-green-500/50 transition-colors">
              <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                <span>🛡️</span> Core Infrastructure
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  Linux System Administration
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  Network Architecture
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  Virtualization (VMware/Proxmox)
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  Hardware Maintenance
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  Storage Solutions (Ceph/ZFS)
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Personal Interests / Human Element */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-gray-500 italic">
            "When I'm not deploying containers, I'm analyzing Formula 1 telemetry or training for my next race."
          </p>
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="text-blue-400 hover:text-blue-300 font-semibold text-sm uppercase tracking-wider"
            >
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}