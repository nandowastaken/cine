import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomeOscar from '../pages/oscar/HomeOscar';
import Voting from "../pages/oscar/Voting";

import HomeAdmin from "../pages/admin/HomeAdmin";
import AdminSection from "../pages/admin/AdminSection";
import AddRecordAdminSection from "../pages/admin/AddRecordAdminSection";

import axios from 'axios';

export default createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/admin",
    element: <HomeAdmin />,
    children: [
      {
        path: "/admin/",
        element: <AdminSection />
      },
      {
        path: "/admin/:section",
        element: <AdminSection />,
        loader: async ({ params }) => {
          const section = params.section;

          if (section === 'categoriesOscar') {
            const { data } = await axios.get('https://deisantix-super-space-parakeet-xqrgrqj7vvv2pjq-3000.preview.app.github.dev/categoriasOscar');
            return data;
          }
        }
      },
      {
        path: "/admin/:section/add",
        element: <AddRecordAdminSection />
      }
    ]
  },
  {
    path: "/oscar",
    element: <HomeOscar />
  },
  {
    path: "/oscar/voting",
    element: <Voting />,
    loader: async () => {
      const { data } = await axios.get('https://deisantix-super-space-parakeet-xqrgrqj7vvv2pjq-3000.preview.app.github.dev/categoriasOscar');
      return data;
    }
  }
]);