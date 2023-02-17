import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomeOscar from '../pages/oscar/HomeOscar';

export default createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/oscar",
    element: <HomeOscar />
  }
]);