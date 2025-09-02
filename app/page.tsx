export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-extrabold mb-4 text-yellow-300">Hi, I'm Your Name!</h1>
      <p className="text-lg mb-6">Welcome to my colorful portfolio. I'm a passionate front-end engineer who loves building beautiful web experiences.</p>
      <div className="flex justify-center gap-4">
        <span className="px-4 py-2 rounded-full bg-pink-500">React</span>
        <span className="px-4 py-2 rounded-full bg-blue-500">Next.js</span>
        <span className="px-4 py-2 rounded-full bg-purple-500">Tailwind CSS</span>
        <span className="px-4 py-2 rounded-full bg-green-500">TypeScript</span>
      </div>
    </section>
  );
}
