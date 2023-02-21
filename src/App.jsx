import "./App.css";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import MovieSection from "./pages/MovieSection";
import Login from "./pages/Login";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs />
      <MovieSection />
      <Footer />
    </div>
  );
}

export default App;
