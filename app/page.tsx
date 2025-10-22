export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-600 to-indigo-600 text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Learn Web Design with Izum-style Training</h1>
        <p className="text-xl mb-8 max-w-xl">
          Practice-first web development bootcamp using modern tools.
        </p>
        <a
          href="#features"
          className="bg-white text-purple-700 font-bold py-3 px-6 rounded-full shadow-md hover:bg-purple-100"
        >
          Get Started
        </a>
      </section>

      <section id="features" className="py-20 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">What You’ll Learn</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">HTML & CSS</h3>
            <p>Master the fundamentals of structure and style.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p>Build for all screen sizes with TailwindCSS.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Animation & Layout</h3>
            <p>Make modern, interactive websites like izum.study.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
