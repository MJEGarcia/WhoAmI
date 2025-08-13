import { Link } from 'react-router-dom';
import '../css/nav.css';

export default function Navbar() {
  return (
    <nav className="h-[7vh] w-full bg-[var(--bold)] border-b border-[var(--accent)] sm:border-b-2 md:border-b-4 sticky top-0 z-50">
      <div className="flex items-center justify-center h-full w-full mx-auto px-2">
        <Link to="/" className="nav-button min-w-[20vw] px-3 py-2 flex justify-center items-center">
          <h1 className="text-[1.8vh] sm:text-[2vh] md:text-[2.2vh]">Home</h1>
        </Link>
        <Link to="/work" className="nav-button min-w-[20vw] px-3 py-2 flex justify-center items-center">
          <h1 className="text-[1.8vh] sm:text-[2vh] md:text-[2.2vh]">Work</h1>
        </Link>
        <Link to="/contact" className="nav-button min-w-[20vw] px-3 py-2 flex justify-center items-center">
          <h1 className="text-[1.8vh] sm:text-[2vh] md:text-[2.2vh]">Contact</h1>
        </Link>
      </div>
  </nav>
  );
}
