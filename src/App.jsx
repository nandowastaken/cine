import "./App.css";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import MovieSection from "./pages/MovieSection";
import Login from "./pages/Login";
import Footer from "./pages/Footer";
import OscarSection from "./pages/oscar/OscarSection";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs />
      <MovieSection />
      <OscarSection />
      <Footer />
    </div>
  );
}

export default App;
