import Link from 'next/link';
import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 min-h-screen text-white">
        <nav className="flex justify-center gap-8 py-6 text-lg font-bold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </nav>
        <main className="max-w-2xl mx-auto p-6 rounded-xl bg-white/20 shadow-lg">
          {children}
        </main>
      </body>
    </html>
  );
}
