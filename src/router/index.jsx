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
        path: "/admin/add/:section",
        element: <AddRecordAdminSection />,
        action: async ({ params, request }) => {
          const formData = await request.formData();
          const body = new Object();

          for (let key of formData.keys()) {
            body[key] = formData.get(key);
          }

          let created = null;
          try {
            if (params.section === 'categoryOscar') {
              created = await axios.post(
                'https://deisantix-super-space-parakeet-xqrgrqj7vvv2pjq-3000.preview.app.github.dev/adicionarCategoriaOscar',
                body
              );
            }
            return created;
          } catch (error) {
            console.log(error);
          }
        }
      }
    ]
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