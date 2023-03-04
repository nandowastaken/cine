import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeOscar from "../pages/oscar/HomeOscar";
import Voting from "../pages/oscar/Voting";

import HomeAdmin from "../pages/admin/HomeAdmin";
import AdminSection from "../pages/admin/AdminSection";
import AddCategory from "../pages/admin/AddCategory";
import Categories from "../pages/admin/Categories";
import NomineesPerCategory from "../pages/admin/NomineesPerCategory";
import AddNominee from "../pages/admin/AddNominee";
import EditNominee from "../pages/admin/EditNominee";

import axios from "../app/axios";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const { data } = await axios.get('/sessaoAtiva');
      return data;
    }
  },
  {
    path: "/admin",
    element: <HomeAdmin />,
    children: [
      {
        path: "/admin/",
        element: <AdminSection />,
      },
      {
        path: "/admin/categoriesOscar",
        element: <Categories />,
        loader: async () => {
          const { data } = await axios.get("/categoriasOscar");
          return data;
        },
      },
      {
        path: "/admin/categoriesOscar/add",
        element: <AddCategory />,
      },
      {
        path: "/admin/categoriesOscar/:category",
        element: <NomineesPerCategory />,
        loader: async ({ params }) => {
          const category = params.category;

          const { data } = await axios.get("/indicadosOscar", {
            params: { category },
          });
          return data;
        },
      },
      {
        path: "/admin/categoriesOscar/:category/add",
        element: <AddNominee />,
      },
      {
        path: "/admin/categoriesOscar/:category/edit/:nominee",
        element: <EditNominee />,
      }
    ],
  },
  {
    path: "/oscar",
    element: <HomeOscar />,
  },
  {
    path: "/oscar/voting",
    element: <Voting />,
    loader: async () => {  
      const user = await axios.get('/sessaoAtiva');

      const categories = await axios.get("/categoriasOscar");

      const oscar = [];
      for (let category of categories.data) {
        const nominees = await axios.get("/indicadosOscar", {
          params: {
            category: category.id,
          },
        });
        
        oscar.push({
          category: category,
          nominees: nominees.data,
        });
      }
      return {
        user: user.data,
        oscar: oscar
      };
    },
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);
