import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-200 to-cyan-200 px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Email Designs that Convert
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            I specialize in crafting responsive, visually stunning, and
            high-performing email templates that engage and sell.
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

      {/* Why Work With Me Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Brands Work With Me</h2>
          <p className="text-gray-600 mb-12">
            I’ve helped top brands and agencies create high-performing email
            experiences that look beautiful across all devices.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl border hover:shadow transition">
              <h3 className="text-lg font-semibold mb-2">⚡ High Performance</h3>
              <p className="text-sm text-gray-600">
                My emails load fast and land right in the inbox — every time.
              </p>
            </div>
            <div className="p-6 rounded-xl border hover:shadow transition">
              <h3 className="text-lg font-semibold mb-2">🎨 On-Brand Visuals</h3>
              <p className="text-sm text-gray-600">
                Clean, compelling designs tailored to your brand tone and
                audience.
              </p>
            </div>
            <div className="p-6 rounded-xl border hover:shadow transition">
              <h3 className="text-lg font-semibold mb-2">💼 Reliable & Pro</h3>
              <p className="text-sm text-gray-600">
                I deliver fast, communicate clearly, and understand real
                business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Recent Work</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={`https://placehold.co/600x400?text=Email+Design+${i}`}
                  alt={`Email Design ${i}`}
                  className="w-full h-auto"
                />
                <div className="p-4 text-left">
                  <p className="font-medium text-gray-800">
                    Email Design {i}
                  </p>
                  <p className="text-sm text-gray-500">
                    High-converting, responsive layout
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/portfolio"
            className="mt-10 inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-md text-sm font-medium transition"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* Testimonial Preview Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
          <blockquote className="text-gray-700 text-lg italic mb-4">
            “Bharpur is an incredible email designer — her work has elevated our
            campaigns and helped us increase engagement by 30%.”
          </blockquote>
          <p className="text-sm text-gray-500">
            — Mary Joshiash, Creative Director @ Spark
          </p>

          <Link
            to="/testimonials"
            className="mt-6 inline-block text-indigo-600 hover:underline text-sm font-medium"
          >
            Read More Testimonials →
          </Link>
        </div>
      </section>

      
    </>
  );
}
