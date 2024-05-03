import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NotFound from "./pages/NotFound.jsx";

const Logout = () => {
  localStorage.clear();
  return <Navigate to='/login' />;
};

const RegisterAndLogout = () => {
  localStorage.clear();
  return <Register />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
