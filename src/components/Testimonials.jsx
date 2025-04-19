const testimonials = [
  {
    id: 1,
    name: "Jessica Devis",
    username: "@jessicadevis",
    initials: "JD",
    text: "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 🎉",
    date: "Jan 17, 2024",
  },
  {
    id: 2,
    name: "Mary Joshiash",
    username: "@maryjoshiash",
    initials: "MJ",
    text: "It's like having a superpower in your toolkit. The ability to craft custom designs quickly and efficiently with simple classes is unparalleled.",
    date: "Jan 18, 2024",
  },
  {
    id: 3,
    name: "Marcell Glock",
    username: "@marcellglock",
    initials: "MG",
    text: "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 😍",
    date: "Jan 19, 2024",
  },
  {
    id: 4,
    name: "Linde Michele",
    username: "@lindemichele",
    initials: "LM",
    text: "With its clear and concise classes, I can easily communicate design intentions to my colleagues. It’s a must-have tool for any web developer. 🧑‍💻",
    date: "Jan 20, 2024",
  },
  {
    id: 5,
    name: "Lucian Eurel",
    username: "@lucianeurel",
    initials: "LE",
    text: "I've tried several CSS frameworks, but this one strikes the perfect balance between flexibility and design.",
    date: "Jan 21, 2024",
  },
  {
    id: 6,
    name: "Misha Stam",
    username: "@mishastam",
    initials: "MS",
    text: "Active community support makes it easy to get started. It’s the ideal framework for design excellence in web apps.",
    date: "Jan 22, 2024",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Think about us</h2>
        <p className="text-gray-500 mb-10">
          That’s the main thing people are controlled by! Thoughts – their perception of themselves!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-sm text-gray-700">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900 flex items-center gap-1">
                    {t.name}
                    <span className="text-purple-600 text-lg">✔</span>
                  </p>
                  <p className="text-gray-500 text-xs">{t.username}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">{t.text}</p>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <a
                  href="#"
                  className="flex items-center gap-1 text-purple-600 hover:underline"
                >
                  See on <span className="text-base">✖</span>
                </a>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
