export default function Projects() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-300">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl bg-pink-200/60 shadow">
          <h3 className="text-xl font-semibold text-pink-700 mb-2">Portfolio Website</h3>
          <p>A personal portfolio built with Next.js and Tailwind CSS.</p>
        </div>
        <div className="p-4 rounded-xl bg-purple-200/60 shadow">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">E-commerce UI</h3>
          <p>Modern, responsive e-commerce front-end using React.</p>
        </div>
        <div className="p-4 rounded-xl bg-blue-200/60 shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Dashboard</h3>
          <p>Beautiful analytics dashboard with interactive charts.</p>
        </div>
      </div>
    </section>
  );
}
