import Header from "../components/Header";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const [error, setError] = useState("");

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const res = await dispatch(registerUser(formData));
    if (res?.payload?.success) {
      navigate("/login");
    } else {
      setError(res?.payload?.message || "Registration failed");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-gray-950 flex flex-col items-center justify-center px-4 py-16">
        <section className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-6">
            Create your account
          </h1>
          <p className="text-gray-400 mb-6">
            Already have an account?
            <Link
              to="/auth/login"
              className="text-orange-500 hover:underline ml-2"
            >
              Login
            </Link>
          </p>
          <form onSubmit={onSubmit} className="space-y-5">
            {registerFormControls.map((control) => (
              <div key={control.name} className="text-left">
                <label
                  htmlFor={control.name}
                  className="block text-gray-300 mb-1 font-medium"
                >
                  {control.label}
                </label>
                <input
                  id={control.name}
                  name={control.name}
                  type={control.type}
                  placeholder={control.placeholder}
                  value={formData[control.name]}
                  onChange={onChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            ))}
            {error && (
              <div className="text-red-500 text-sm text-left">{error}</div>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors disabled:opacity-60"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Register;
