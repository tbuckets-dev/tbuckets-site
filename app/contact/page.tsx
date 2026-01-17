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
    <main className="min-h-screen bg-gray-950 px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Initialize Comms
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Have a project in mind? Let's bridge the gap between infrastructure and automation.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-xl">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Transmission Received</h3>
              <p className="mt-2 text-gray-400">I will get back to you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-2 block w-full rounded-md border-0 bg-gray-800 py-2.5 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-2 block w-full rounded-md border-0 bg-gray-800 py-2.5 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="mt-2 block w-full rounded-md border-0 bg-gray-800 py-2.5 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
                  placeholder="Tell me about your project infrastructure..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
              </button>

              {status === 'error' && (
                <p className="text-center text-sm text-red-400">
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