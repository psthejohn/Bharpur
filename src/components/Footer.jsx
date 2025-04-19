import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white text-center py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">Ready to work together?</h3>
        <p className="text-sm mb-6">
          Let’s create something impactful for your audience.
        </p>
        <Link
          to="/contact"
          className="bg-white text-indigo-600 px-5 py-2 rounded-md text-sm font-semibold hover:bg-indigo-100 transition"
        >
          Let’s Talk
        </Link>

        {/* Divider */}
        <div className="border-t border-indigo-400 my-8"></div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row justify-between text-sm text-indigo-200 gap-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/portfolio" className="hover:underline">
              Portfolio
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            <Link to="/testimonials" className="hover:underline">
              Testimonials
            </Link>
          </div>

          <p className="text-xs sm:text-sm mt-2 sm:mt-0">
            &copy; {new Date().getFullYear()} Bharpur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
