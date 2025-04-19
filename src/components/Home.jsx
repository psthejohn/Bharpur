import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-200 to-cyan-200 px-4">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
          Email Designs that Convert
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          I specialize in crafting responsive, visually stunning, and high-performing email templates that engage and sell.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/portfolio"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-md text-sm font-medium transition"
          >
            See My Work
          </Link>
          <Link
            to="/contact"
            className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-2 rounded-md text-sm font-medium transition"
          >
            Get in Touch
          </Link>
        </div>

        <div className="mt-12 animate-bounce text-gray-500 text-sm">
          ↓ Scroll to learn more
        </div>
      </div>
    </section>
  );
}
