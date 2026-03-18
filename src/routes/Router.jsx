import { createBrowserRouter, Navigate } from "react-router";
import Root from "../pages/Root/Root";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoruNews/CategoryNews";
import SignUp from "../pages/SignUP/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        children: [
          {
            index:true,
            element:<Navigate to="/category/1"></Navigate>
          },
          {
            path: "category/:id",
            Component: CategoryNews,
            loader: () => fetch("/news.json")
          }
        ]
      },

    ]
  },
  { path: "login", Component: Login },
  { path: "signup", Component: SignUp }
]);