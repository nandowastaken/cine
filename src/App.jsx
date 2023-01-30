import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs />
    </div>
  );
}

export default App;
