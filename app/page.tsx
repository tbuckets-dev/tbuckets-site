'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaServer, FaCode } from "react-icons/fa"; // Ensure you have these imported

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white selection:bg-blue-500/30">
      
      {/* HERO SECTION */}
      <section className="relative flex min-h-[90vh] flex-col justify-center px-4 sm:px-6 lg:px-8">
        
        {/* Background Grid Pattern (Optional visual flair) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>

        <div className="relative mx-auto max-w-5xl z-10">
          
          {/* Animated Greeting */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-700/30 mb-6">
              System Status: Online
            </span>
          </motion.div>

          {/* Main Headline with Typewriter */}
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6">
            <span className="block text-gray-400 text-3xl sm:text-4xl mb-2 font-medium">I am an</span>
            <span className="text-blue-500">
              <Typewriter
                options={{
                  strings: [
                    'IT Veteran.',
                    'DevOps Engineer.',
                    'Infrastructure Architect.',
                    'Reliability Expert.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </span>
          </h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-xl leading-8 text-gray-400 max-w-2xl"
          >
            Transitioning 12 years of enterprise IT experience into modern DevOps. 
            I build the vessel that carries your code safely to production.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <Link
              href="/projects"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105"
            >
              View Deployments
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors">
              Read My Manifest <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW (Animated) */}
      <section className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Protocols</h2>
            <p className="mt-2 text-lg leading-8 text-gray-400">
              Selected works demonstrating the bridge between infrastructure and code.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            
            {/* Project Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col justify-between rounded-2xl bg-gray-950 p-8 ring-1 ring-gray-800"
            >
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500">2024</span>
                  <span className="relative z-10 rounded-full bg-green-500/10 px-3 py-1.5 font-medium text-green-400">Active</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <span className="absolute inset-0" />
                    F1 Pit Window Predictor
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                    Real-time ingestion pipeline using Python, Docker, and Airflow to predict tire strategy.
                  </p>
                </div>
              </div>
            </motion.div>

             {/* Project Card 2 */}
             <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col justify-between rounded-2xl bg-gray-950 p-8 ring-1 ring-gray-800"
            >
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500">2024</span>
                  <span className="relative z-10 rounded-full bg-blue-500/10 px-3 py-1.5 font-medium text-blue-400">Building</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <span className="absolute inset-0" />
                    Vessel Portfolio
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                    Next.js 14 App Router site with Tailwind v4 (experimental) and CI/CD integration.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col justify-between rounded-2xl bg-gray-950 p-8 ring-1 ring-gray-800"
            >
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500">Planned</span>
                  <span className="relative z-10 rounded-full bg-gray-500/10 px-3 py-1.5 font-medium text-gray-400">Concept</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <span className="absolute inset-0" />
                    Running Plan AI
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                    Generating marathon training schedules using LLMs and strava data integration.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}