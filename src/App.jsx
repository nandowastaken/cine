import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import MovieSection from "./pages/MovieSection";
import Login from "./pages/Login";

import HomeOscar from "./pages/oscar/HomeOscar";

function App() {
  return (
    <div className="App">
      <HomeOscar />
    </div>
  );
}

export default App;
