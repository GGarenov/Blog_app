import { Route, Routes } from "react-router-dom";
// import { AuthLayout } from "./components/auth/layout";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
