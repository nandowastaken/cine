import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import MovieSection from "./MovieSection";
import OscarSection from "./oscar/OscarSection";
import Footer from "./Footer";

export default function MainBody() {
  return (
    <div className="MainBody">
      <LandingPage />
      <AboutUs />
      <MovieSection />
      <OscarSection />
      <Footer />
    </div>
  );
}