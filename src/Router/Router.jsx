import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Layout/Register/Register";
import { PrivateProvider } from "./PrivateProvider";
import { UpdateProfile } from "../Pages/Profile/UpdateProfile";
import { FeaturedProperties } from "../Pages/FeaturedProperties/FeaturedProperties";
import { FeaturedDetails } from "../Pages/FeaturedDetails";
import { ErrorPage } from "../Shared/ErrorPage/ErrorPage";
import { Reviews } from "../Pages/Reviews/Reviews";
import { UserProfile } from "../Pages/Profile/UserProfile";
import { Contact } from "../Pages/Contact/Contact";
import { About } from "../Pages/About/About";
import PaymentInputs from "../Pages/Payment/PaymentOption";
import { Gallery } from "../Pages/Gallery/Gallery";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateProvider><FeaturedDetails></FeaturedDetails></PrivateProvider>,
          loader: ()=> fetch('/real.json')
        },
        {
            path: "/update-profile",
            element: <PrivateProvider><UpdateProfile></UpdateProfile></PrivateProvider>
        },
        {
            path: "/user-profile",
            element: <PrivateProvider><UserProfile></UserProfile></PrivateProvider>
        },
        {
          path: "/reviews",
          element: <PrivateProvider><Reviews></Reviews></PrivateProvider>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/payment",
          element: <PrivateProvider><PaymentInputs></PaymentInputs></PrivateProvider>
        },
        {
          path: "/gallery",
          element: <PrivateProvider><Gallery></Gallery></PrivateProvider>
        },
        
      ]
    },
  ]);