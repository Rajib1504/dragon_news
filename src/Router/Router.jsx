import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Components/main components/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Regeister";
import NewsDetails from "../Components/Pages/NewsDetails";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>, // this navigate property is used here to sent the user directly to one component
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },

  {
    path: "/news/:id",
    element: (
      <PrivateRouter>
        <NewsDetails></NewsDetails>
      </PrivateRouter>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>error</h1>,
  },
]);
export default router;
