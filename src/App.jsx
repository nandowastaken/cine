import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBody from "./pages/MainBody";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <MainBody />
    </div>
  );
}

export default App;
