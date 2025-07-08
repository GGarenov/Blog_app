import Header from "../components/Header";
import { loginFormControls } from "../config";
import { loginUser } from "../store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = loginFormControls.reduce((acc, curr) => {
  acc[curr.name] = "";
  return acc;
}, {});

import { useSelector } from "react-redux";

function AuthLogin({ isAuthenticated }) {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function onSubmit(event) {
    event.preventDefault();
    setError("");
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        navigate("/");
      } else {
        setError(data?.payload?.message || "Login failed");
      }
    });
  }

  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-gray-950 flex flex-col items-center justify-center px-4 py-16">
        <section className="w-full max-w-md bg-gray-900 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Login to <span className="text-orange-500">Football Blog</span>
          </h1>
          <form onSubmit={onSubmit} className="space-y-5">
            {loginFormControls.map((control) => (
              <div key={control.name}>
                <label
                  htmlFor={control.name}
                  className="block text-gray-300 font-medium mb-2"
                >
                  {control.label.charAt(0).toUpperCase() +
                    control.label.slice(1)}
                </label>
                <input
                  id={control.name}
                  name={control.name}
                  type={control.type}
                  placeholder={control.placeholder}
                  value={formData[control.name]}
                  onChange={onChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  autoComplete={control.name}
                  required
                />
              </div>
            ))}
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors mt-2"
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-center text-gray-400">
            Don&apos;t have an account?
            <Link
              className="font-semibold ml-2 text-orange-500 hover:underline"
              to="/register"
            >
              Register
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}

export default AuthLogin;
