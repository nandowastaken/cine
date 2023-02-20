import "./App.css";
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs />
      <MovieSection />
    </div>
  );
}

export default App;
