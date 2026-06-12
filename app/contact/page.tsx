'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      company: formData.get('company'), // honeypot
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send');

      setStatus('success');
      (e.target as HTMLFormElement).reset(); // Clear the form
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <main className="min-h-screen bg-bg px-4 py-24 text-fg sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted">
            Hiring, collaborating, or just want to talk infrastructure? I read everything.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-8 shadow-xl">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center" role="status">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-fg">Message Received</h3>
              <p className="mt-2 text-muted">I will get back to you shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm font-medium text-primary hover:text-primary-hover"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot: hidden from real users, bots autofill it */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input type="text" name="company" id="company" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  maxLength={100}
                  autoComplete="name"
                  className="mt-2 block w-full rounded-md border-0 bg-surface-2 py-2.5 px-4 text-fg shadow-sm ring-1 ring-inset ring-line focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  className="mt-2 block w-full rounded-md border-0 bg-surface-2 py-2.5 px-4 text-fg shadow-sm ring-1 ring-inset ring-line focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  maxLength={5000}
                  className="mt-2 block w-full rounded-md border-0 bg-surface-2 py-2.5 px-4 text-fg shadow-sm ring-1 ring-inset ring-line focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="Tell me about the role or project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex w-full justify-center rounded-md bg-primary-strong px-3 py-2.5 text-sm font-semibold text-on-primary shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'error' && (
                <p className="text-center text-sm text-red-400" role="alert">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
