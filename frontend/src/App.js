import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MotherArtPage from "./pages/MotherArtPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App min-h-screen bg-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mothers-art" element={<MotherArtPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;