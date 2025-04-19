import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col justify-between text-white ">
              <Home />
            </div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <div className="container mx-auto px-4 py-10">
              <Portfolio />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="container mx-auto px-4 py-10">
              <About />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="container mx-auto px-4 py-10">
              <Contact />
            </div>
          }
        />
         <Route
          path="/testimonials"
          element={
            <div className="container mx-auto px-4 py-10">
              <Testimonials />
            </div>
          }
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
