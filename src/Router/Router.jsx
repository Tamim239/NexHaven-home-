import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Layout/Register/Register";
import { PrivateProvider } from "./PrivateProvider";
import { UpdateProfile } from "../Pages/Profile/UpdateProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/update-profile",
            element: <PrivateProvider><UpdateProfile></UpdateProfile></PrivateProvider>
        },
      ]
    },
  ]);