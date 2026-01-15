// 1. We import the component we built earlier
import ContactForm from '../src/components/ContactForm';

export default function Home() {
  return (
    // 'min-h-screen' makes the background cover the whole page
    <main className="min-h-screen bg-slate-950 text-white font-sans p-8">
      
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          TBuckets DevOps Lab
        </h1>
        <p className="text-xl text-slate-400">
          IT Professional | 12 Years Experience | DevOps Specialist
        </p>
      </header>

      {/* The Contact Form Section */}
      <div className="max-w-4xl mx-auto">
        <ContactForm />
      </div>

      <footer className="mt-20 text-center text-slate-500 text-sm">
        © 2026 TBuckets.us | Powered by NUC & n8n
      </footer>
    </main>
  );
}