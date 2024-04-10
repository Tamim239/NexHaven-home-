import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Layout/Register/Register";
import { PrivateProvider } from "./PrivateProvider";
import { UpdateProfile } from "../Pages/Profile/UpdateProfile";
import { FeaturedProperties } from "../Pages/FeaturedProperties/FeaturedProperties";
import { FeaturedDetails } from "../Pages/FeaturedDetails";

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
          path: "/featuredProduct",
          element: <FeaturedProperties></FeaturedProperties>,
        },
        {
          path: "/feature/:id",
          element: <FeaturedDetails></FeaturedDetails>,
          loader: ()=> fetch('/real.json')
        },
        {
            path: "/update-profile",
            element: <PrivateProvider><UpdateProfile></UpdateProfile></PrivateProvider>
        }
        
      ]
    },
  ]);