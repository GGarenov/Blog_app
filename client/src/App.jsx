import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { checkAuth } from "./store/auth-slice";
import Profile from "./pages/Profile";

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Login />;
  }

  return children;
}

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // Show loading screen until auth check is complete
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login isAuthenticated={isAuthenticated} user={user} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
