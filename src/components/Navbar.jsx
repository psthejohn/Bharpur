import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-indigo-600">BHARPUR</div>
        <div className="space-x-4">
          {['/', '/portfolio', '/about', '/contact','/testimonials'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'
              }
            >
              {['Home', 'Portfolio', 'About', 'Contact','Testimonials'][index]}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
