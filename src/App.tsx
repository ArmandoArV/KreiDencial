import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Router
      >
        <Routes
        >
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

/*
      <Header headerLogo={kreiBlanco} isAdmin={false} isLoggedIn={false} />
*/
