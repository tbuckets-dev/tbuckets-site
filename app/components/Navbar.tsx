import Link from 'next/link';
import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-gray-900 border-b border-gray-800">
      <div className="max-w-5xl mx-auto flex justify-between items-center text-white">
        {/* Logo / Brand Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-white transition-transform group-hover:scale-110">
            <Logo className="h-8 w-8" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Vessel
          </span>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="https://github.com/tbuckets-dev" target="_blank" className="hover:text-blue-400 transition-colors">
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
}