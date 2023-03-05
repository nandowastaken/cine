import { createBrowserRouter, Navigate } from "react-router-dom";

import MainBody from '../pages/MainBody';
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

import VotesPerNominee from "../pages/admin/VotesPerNominee";

import axios from "../app/axios";

export default createBrowserRouter([
  {
    path: "/",
    element: <MainBody />,
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

          const nominees = await axios.get("/indicadosOscar", {
            params: { category },
          });

          for (let nominee of nominees.data) {
            const votes = await axios.get("/votosOscar", {
              params: {
                nominee: nominee.id
              }
            });
            nominee.votes = votes.data;
          }
          
          return nominees.data;
        },
      },
      {
        path: "/admin/categoriesOscar/:category/add",
        element: <AddNominee />,
      },
      {
        path: "/admin/categoriesOscar/:category/edit/:nominee",
        element: <EditNominee />,
      },
      {
        path: "/admin/categoriesOscar/:category/:nominee/votes",
        element: <VotesPerNominee />
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
