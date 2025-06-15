'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-6 py-12 sm:px-12 font-sans">
      <header className="mb-12 text-center">
        <Image src="/cwp_logo.jpg" alt="CWP Academy Logo" width={100} height={100} className="mx-auto mb-4" />
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">CWP Academy</h1>
        <p className="text-lg sm:text-xl text-gray-600">Empowering ideas. Supporting innovation.</p>
      </header>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-4 py-2 rounded ${
            activeTab === 'privacy'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Privacy Policies
        </button>
        <button
          onClick={() => setActiveTab('terms')}
          className={`px-4 py-2 rounded ${
            activeTab === 'terms'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Terms & Conditions
        </button>
      </div>

      <main className="w-full max-w-3xl space-y-8">
        {activeTab === 'privacy' && (
          <>
            <section className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-medium mb-2">🔗 Jinja - Hub Legal</h3>
              <p className="mb-3 text-gray-700">View the privacy policy for our Jinja Hub app below:</p>
              <Link
                href="https://jinja-hub-privacy.vercel.app/policy"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                View Jinja-Hub Privacy Policy
              </Link>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-medium mb-2">🔗 AiO Bible Legal</h3>
              <p className="mb-3 text-gray-700">View the privacy policy for our Bible app below:</p>
              <Link
                href="/aio-policy"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                View AiO Bible Privacy Policy
              </Link>
            </section>
          </>
        )}

        {activeTab === 'terms' && (
          <>
            <section className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-medium mb-2">📄 Jinja - Hub Terms</h3>
              <p className="mb-3 text-gray-700">Read the terms and conditions for our Jinja Hub app:</p>
              <Link
                href="https://jinja-hub-privacy.vercel.app/terms"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                View Jinja-Hub Terms
              </Link>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-medium mb-2">📄 AiO Bible Terms</h3>
              <p className="mb-3 text-gray-700">Read the terms and conditions for our Bible app:</p>
              <Link
                href="/aio-terms"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                View AiO Bible Terms
              </Link>
            </section>
          </>
        )}
      </main>

      <footer className="mt-16 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} CWP Academy. All rights reserved.
      </footer>
    </div>
  );
}
