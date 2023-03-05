import { useEffect } from "react";
import axios from '../app/axios';

import { useSelector, useDispatch } from "react-redux";
import { showScreen, hideScreen } from '../features/loading/loadingSlice';
import { setUser } from '../features/user/userSlice';

import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import MovieSection from "./MovieSection";
import OscarSection from "./oscar/OscarSection";
import Team from "./Team";
import Footer from "./Footer";

export default function MainBody() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);

  useEffect(() => {
    const getUser = async () => {
      dispatch(showScreen());

      const { data } = await axios.get('/sessaoAtiva');
      dispatch(setUser(data));
      dispatch(hideScreen());
    };

    if (!user) {
      getUser();
    }
  }, []);

  return (
    <div className="MainBody">
      <LandingPage />
      <AboutUs />
      <MovieSection />
      <OscarSection />
      {/* <Team/> */}
      <Footer />
    </div>
  );
}
