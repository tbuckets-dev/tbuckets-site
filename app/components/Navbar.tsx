'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: 'https://github.com/tbuckets-dev', label: 'GitHub', external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <Logo className="h-8 w-8 transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold tracking-tight text-fg">Vessel</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 sm:flex">
          {links.map(({ href, label, external }) => (
            <Link
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-current={pathname === href ? 'page' : undefined}
              className="text-sm font-medium text-muted transition-colors hover:text-fg aria-[current]:text-fg"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-primary-strong px-5 py-2.5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-hover"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-md border border-line p-2.5 text-fg sm:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-line bg-bg px-5 pb-5 sm:hidden">
          {links.map(({ href, label, external }) => (
            <Link
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 text-base font-medium text-muted hover:text-fg"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg bg-primary-strong px-5 py-3 text-center text-base font-semibold text-on-primary"
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
