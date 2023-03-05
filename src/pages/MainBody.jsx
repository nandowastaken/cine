import { useEffect } from "react";
import axios from '../app/axios';

import { useSelector, useDispatch } from "react-redux";
import { showScreen, hideScreen } from '../features/loading/loadingSlice';
import { setUser, closeProfileOptions } from '../features/user/userSlice';

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

      let { data } = await axios.get('/sessaoAtiva');
      if (typeof data === 'object') data = '';

      dispatch(setUser(data));
      dispatch(hideScreen());
    };

    if (!user) {
      getUser();
    }
  }, []);

  return (
    <div className="MainBody" onClick={() => {
      dispatch(closeProfileOptions());
    }}>
      <LandingPage />
      <AboutUs />
      <MovieSection />
      <OscarSection />
      {/* <Team/> */}
      <Footer />
    </div>
  );
}
