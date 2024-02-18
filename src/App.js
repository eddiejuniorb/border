import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Screens/Register";
import Login from "./Screens/Login";

function App() {
  return (
    <div className="w-full">
      {/* Header */}
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
