import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoruNews/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/", Component: Home, children: [
          {
            path: "category/:id", 
            Component: CategoryNews,
            loader:()=>fetch("/news.json")
          }
        ]
      },

    ]
  },
  { path: "login", Component: Login }
]);