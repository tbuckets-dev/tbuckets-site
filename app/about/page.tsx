import Link from "next/link";
import { FaDocker, FaPython, FaAws, FaWindows, FaNetworkWired, FaServer, FaShieldAlt, FaHdd, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiTerraform, SiKubernetes, SiVmware, SiCitrix, SiGooglecloudstorage } from "react-icons/si";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-b border-gray-900">
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

      {/* The Vessel Vision */}
      <section className="bg-gray-900/50 border-b border-gray-800 px-4 py-20 sm:px-6 lg:px-8">
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

      {/* Professional History (Timeline) */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gray-950">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12">Operational History</h2>
          
          <div className="relative border-l border-gray-800 ml-3 space-y-12">
            
            {/* Role 1: Data Protection Engineer III */}
            <div className="relative pl-8 sm:pl-12">
              <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-blue-500 border border-gray-950"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                <h3 className="text-xl font-semibold text-white">Data Protection Engineer III</h3>
                <span className="text-sm text-gray-500">Conversant Group • 2022 — Present</span>
              </div>
              <p className="mt-2 text-gray-400">
                Specialized in high-stakes disaster recovery and data integrity strategies.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li className="flex gap-2">
                  <span className="text-blue-500">▹</span>
                  Designed and implemented enterprise data protection strategies using <strong>Veeam, Cohesity, and Nimble Storage</strong>.
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">▹</span>
                  Conducted regular restoration tests and capacity planning to ensure recoverability for mission-critical client systems.
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">▹</span>
                  Supported Mimecast email filtering and DLP policies for <strong>60+ scale customers</strong>.
                </li>
              </ul>
            </div>

            {/* Role 2: Managed Services Engineer */}
            <div className="relative pl-8 sm:pl-12">
              <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-gray-700 border border-gray-950"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                <h3 className="text-xl font-semibold text-gray-200">Managed Services Engineer</h3>
                <span className="text-sm text-gray-500">Conversant Group • 2016 — 2022</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-gray-600">▹</span>
                  Managed full-stack virtualization environments including <strong>VMware</strong>, Windows Server, and Active Directory.
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-600">▹</span>
                  Led implementation and management of <strong>Citrix</strong> environments for remote workforce enablement.
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-600">▹</span>
                  Administered Microsoft 365, Azure, and Exchange infrastructure.
                </li>
              </ul>
            </div>

            {/* Role 3: Support Engineer */}
            <div className="relative pl-8 sm:pl-12">
              <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-gray-800 border border-gray-950"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                <h3 className="text-xl font-semibold text-gray-400">Support Engineer</h3>
                <span className="text-sm text-gray-500">Conversant Group • 2012 — 2016</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Foundational IT operations, technical troubleshooting, and frontline incident resolution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Matrix (Updated with specific Resume keywords) */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gray-900/30 border-t border-gray-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12">Technical Arsenal</h2>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            
            {/* Left Column: Modern DevOps */}
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
                <FaDocker /> Modern DevOps
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <SiTerraform className="text-blue-500 text-lg" />
                  </span>
                  Terraform & IaC
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <FaDocker className="text-blue-500 text-lg" />
                  </span>
                  Docker & Kubernetes
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <FaPython className="text-blue-500 text-lg" />
                  </span>
                  Python Automation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <FaGithub className="text-blue-500 text-lg" />
                  </span>
                  CI/CD & GitHub Actions
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <SiNextdotjs className="text-blue-500 text-lg" />
                  </span>
                  Next.js & React
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <FaAws className="text-blue-500 text-lg" />
                  </span>
                  AWS & Cloud Architecture
                </li>
              </ul>
            </div>

            {/* Right Column: Core Infrastructure */}
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 hover:border-green-500/50 transition-colors">
              <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                <FaServer /> Core Infrastructure
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <SiVmware className="text-green-500 text-lg" />
                  </span>
                  VMware & Virtualization
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <FaShieldAlt className="text-green-500 text-lg" />
                  </span>
                  Mimecast & DLP Security
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <SiCitrix className="text-green-500 text-lg" />
                  </span>
                  Citrix & VDI
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <FaHdd className="text-green-500 text-lg" />
                  </span>
                  Nimble Storage & Cohesity
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <FaWindows className="text-green-500 text-lg" />
                  </span>
                  Windows Server & Active Directory
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 flex justify-center flex-shrink-0">
                    <FaNetworkWired className="text-green-500 text-lg" />
                  </span>
                  Disaster Recovery (Veeam)
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 lg:px-8 bg-gray-950">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-gray-500 italic">
            "When I'm not configuring Mimecast policies or deploying containers, I'm analyzing Formula 1 telemetry or training for my next race."
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