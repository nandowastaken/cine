import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomeOscar from '../pages/oscar/HomeOscar';
import Voting from "../pages/oscar/Voting";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/oscar",
    element: <HomeOscar />
  },
  {
    path: "/oscar/voting",
    element: <Voting />
  }
]);