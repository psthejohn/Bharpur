import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="text-center py-20">
      <h2 className="text-4xl font-bold mb-6">Email Designs that Convert</h2>
      <p className="text-lg mb-8 text-gray-700">
        I specialize in crafting responsive, visually stunning, and high-performing email templates.
      </p>
      <Link
        to="/portfolio"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500"
      >
        See My Work
      </Link>
    </section>
  );
}
