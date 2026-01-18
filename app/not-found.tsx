import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white">
      <h1 className="text-9xl font-black text-gray-800">404</h1>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl z-10 -mt-12">
        Signal Lost
      </h2>
      <p className="mt-4 text-gray-400 z-10">
        The resource you are looking for has been moved or destroyed.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 z-10"
      >
        Re-establish Connection
      </Link>
    </div>
  );
}