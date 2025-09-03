import './globals.css';
import type { ReactNode } from 'react';
import PageTransition from './components/PageTransition';
import ActiveLink from './components/ActiveLink';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 min-h-screen text-white flex flex-col">
        <header className="sticky top-0 shadow-lg z-50 backdrop-blur-lg bg-opacity-80">
          <nav className="flex justify-center gap-8 text-lg font-bold py-6">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/about">About</ActiveLink>
            <ActiveLink href="/projects">Projects</ActiveLink>
          </nav>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="max-w-2xl mx-auto p-6">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
        </main>
      </body>
    </html>
  );
}
