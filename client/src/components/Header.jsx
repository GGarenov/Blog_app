import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/auth-slice";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logoutUser());
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md flex items-center justify-between px-8 py-3">
      <div className="font-bold text-2xl tracking-wide">
        <Link
          to="/"
          className="text-white no-underline hover:text-orange-400 transition-colors"
        >
          The Football Blog
        </Link>
      </div>

      <nav className="flex flex-1 justify-center gap-8">
        <Link
          to="/"
          className="text-white text-lg font-medium hover:text-orange-400 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/news"
          className="text-white text-lg font-medium hover:text-orange-400 transition-colors"
        >
          News
        </Link>
        <Link
          to="/about"
          className="text-white text-lg font-medium hover:text-orange-400 transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-white text-lg font-medium hover:text-orange-400 transition-colors"
        >
          Contact
        </Link>
      </nav>

      <div className="flex gap-3">
        {!isAuthenticated ? (
          <>
            <Link
              to="/login"
              className="px-5 py-2 bg-orange-500 text-white rounded-full font-semibold text-base hover:bg-orange-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 bg-white text-gray-900 border border-white rounded-full font-semibold text-base hover:bg-orange-500 hover:text-white transition-colors"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/profile"
              className="px-5 py-2 bg-white text-gray-900 border border-white rounded-full font-semibold text-base hover:bg-orange-500 hover:text-white transition-colors"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-orange-500 text-white rounded-full font-semibold text-base hover:bg-orange-600 transition-colors"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
