import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg text-fg">
      <h1 className="text-9xl font-black text-surface-2">404</h1>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl z-10 -mt-12">
        Signal Lost
      </h2>
      <p className="mt-4 text-muted z-10">
        The resource you are looking for has been moved or destroyed.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-primary-strong px-5 py-2.5 text-sm font-semibold text-on-primary shadow-sm hover:bg-primary-hover z-10"
      >
        Re-establish Connection
      </Link>
    </div>
  );
}
