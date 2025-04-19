export default function About() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-cyan-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Avatar or Profile */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-500 text-white flex items-center justify-center text-3xl font-bold shadow-md">
          BK
        </div>

        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Hi! I'm <strong>Bharpur Kour</strong>, an experienced email designer
          focused on building responsive and high-converting email designs. I've worked with international brands across the USA, Canada, and Australia — delivering visuals that not only look good but perform brilliantly.
        </p>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-10 text-left">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-indigo-600 text-lg mb-2">🌍 Global Reach</h3>
            <p className="text-sm text-gray-600">
              Collaborated with teams and agencies from USA, Canada, Australia — across different time zones and project scopes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-indigo-600 text-lg mb-2">📩 Email Strategy</h3>
            <p className="text-sm text-gray-600">
              I don’t just design — I understand segmentation, campaign goals, and customer journeys to make email work for business.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-indigo-600 text-lg mb-2">🎯 Results-Oriented</h3>
            <p className="text-sm text-gray-600">
              From welcome flows to sales blasts, my emails get clicks, drive revenue, and elevate brand perception.
            </p>
          </div>
        </div>

        {/* Fun facts or callout */}
        <div className="mt-12 text-sm text-gray-600 max-w-3xl mx-auto">
          <p>
            🎨 I also love moodboarding, prototyping in Figma, and helping brands nail that
            “just right” design vibe. When I’m not designing, you’ll find me enjoying a good recipe or planning my next layout idea ✨
          </p>
        </div>
      </div>
    </section>
  );
}
