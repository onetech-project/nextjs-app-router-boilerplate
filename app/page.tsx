'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import skills from '../public/data/skills.json';
import contacts from '../public/data/contacts.json';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 mb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-40 h-40 md:w-48 md:h-48 shrink-0"
        >
          <Image
            src="/images/profile-photo.jpg"
            alt="Profile Photo"
            width={224}
            height={224}
            className="rounded-full w-full h-full object-cover border-4 border-yellow-300 shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl font-bold mb-4 text-yellow-300">Hi, I'm {contacts.name}!</h1>
          <p className="text-lg mb-6">Welcome to my colorful portfolio. I'm a passionate front-end engineer who loves building beautiful web experiences.</p>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col md:flex-row justify-center gap-8 mb-12"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className={`px-4 py-2 rounded-full ${skill.color} transition-colors`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-300">Let's Connect!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href={`mailto:${contacts.email}`} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-pink-900/40 to-pink-900/20 backdrop-blur-sm hover:from-pink-900/50 hover:to-pink-900/30 transition-all border border-pink-300/20 shadow-[0_0_15px_rgba(236,72,153,0.15)] hover:shadow-[0_0_20px_rgba(236,72,153,0.25)] hover:border-pink-300/30">
            <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span className="text-pink-50">{contacts.email}</span>
          </a>
          <a href={`tel:${contacts.phone}`} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-blue-900/20 backdrop-blur-sm hover:from-blue-900/50 hover:to-blue-900/30 transition-all border border-blue-300/20 shadow-[0_0_15px_rgba(96,165,250,0.15)] hover:shadow-[0_0_20px_rgba(96,165,250,0.25)] hover:border-blue-300/30">
            <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span className="text-blue-50">{contacts.phoneLabel}</span>
          </a>
          <a href={contacts.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-purple-900/20 backdrop-blur-sm hover:from-purple-900/50 hover:to-purple-900/30 transition-all border border-purple-300/20 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-300/30">
            <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            <span className="text-purple-50">{contacts.name}</span>
          </a>
          <a href={contacts.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-green-900/40 to-green-900/20 backdrop-blur-sm hover:from-green-900/50 hover:to-green-900/30 transition-all border border-green-300/20 shadow-[0_0_15px_rgba(74,222,128,0.15)] hover:shadow-[0_0_20px_rgba(74,222,128,0.25)] hover:border-green-300/30">
            <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
            <span className="text-green-50">{contacts.name}</span>
          </a>
        </div>
      </section>
    </main>
  );
}
