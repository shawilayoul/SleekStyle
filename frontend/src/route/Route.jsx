import { createBrowserRouter } from "react-router-dom";
import AppLayOUt from "../components/AppLayOUt";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import SucessURl from "../components/SucessURl";
import Cancel from "../components/Cancel";
import Dasbbord from "../adminDashbord/Dashbord";
import Prodducts from "../adminDashbord/Products";
import Expenses from "../adminDashbord/Expenses";
import NavBar from "../adminDashbord/NavBar";
import Users from "../adminDashbord/Users";
import SidBar from "../adminDashbord/SidBar";
import Inventroy from "../adminDashbord/Inventroy";
import Settings from "../adminDashbord/Settings";
import AppLayOUtAdmin from "../components/AppLayOUtAdmin";
import UpdateProductForm from "../adminDashbord/components/UpdateProductForm";
import SignInPage from "../components/SignInPage";
import SignUpPage from "../components/SignUpPage";
import VerifiyEmail from "../components/VerifiyEmail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOUt />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
      },
      {
        path: "/signIn",
        element: <SignInPage/>,
      },
      {
        path: "/verifyEmail",
        element: <VerifiyEmail/>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AppLayOUtAdmin />,
    children: [
      {
        index: true,
        element: <Dasbbord />,
      },
      {
        path: "products",
        element: <Prodducts />,
      
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
      {
        path: "navBar",
        element: <NavBar />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "sidBar",
        element: <SidBar />,
      },
      {
        path: "inventory",
        element: <Inventroy />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "products/update/:_id",
        element: <UpdateProductForm />,
      },
     
    ],
  },

  {
    path: "/checkout-success",
    element: <SucessURl />,
  },
  {
    path: "/checkout-cancel",
    element: <Cancel />,
  },
]);

export default router;
