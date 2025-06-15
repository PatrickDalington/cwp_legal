'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-6 py-12 sm:px-12 font-sans">
      <header className="mb-12 text-center">
        <Image src="/cwp_logo.jpg" alt="CWP Academy Logo" width={100} height={100} className="mx-auto mb-4" />
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">CWP Academy</h1>
        <p className="text-lg sm:text-xl text-gray-600">Empowering ideas. Supporting innovation.</p>
      </header>

      <main className="w-full max-w-3xl text-center space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Welcome to Our Official Legal Site</h2>
          <p className="text-gray-700">
            CWP Academy is the parent organization for all our digital platforms, tools, and applications including the AiO Bible app.
            This site provides access to our official privacy policies, terms, and other compliance information.
          </p>
        </section>

        <section className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium mb-2">🔗 Jinja - Hub Legal</h3>
            <p className="mb-3 text-gray-700">View the privacy policy for our Jinja Hub app below:</p>
            <Link
              href="https://jinja-hub-privacy.vercel.app/policy"
              className="inline-block bg-blue-600 !text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              View Jinja-Hub Privacy Policy
            </Link>
        </section>
        <section className="bg-gray-100 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-medium mb-2">🔗 AiO Bible Legal</h3>
          <p className="mb-3 text-gray-700">View the privacy policy for our Bible app below:</p>
          <Link
            href="/aio-policy"
            className="inline-block bg-blue-600 !text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View AiO Bible Privacy Policy
          </Link>
        </section>
      </main>

      <footer className="mt-16 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CWP Academy. All rights reserved.
      </footer>
    </div>
  );
}
