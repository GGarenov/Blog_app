import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white shadow-inner flex flex-col md:flex-row items-center justify-between px-8 py-4 border-t border-gray-800">
      <div className="font-bold text-xl tracking-wide mb-2 md:mb-0">
        <Link
          to="/"
          className="text-white no-underline hover:text-orange-400 transition-colors"
        >
          The Football Blog
        </Link>
      </div>

      <div className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} The Football Blog. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
