import { Login, Logout, Register } from "@components/auth/";
import { ErrorPage } from "@components/base/";
import { PantryItems } from "@components/services/pantry";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages";
import { pantryItemsLoader } from "./loaders";
import { loginAction } from "./actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/pantries/:pantryId",
      element: <PantryItems />,
      loader: pantryItemsLoader,
    }],
  },
  { path: "/auth/login", element: <Login />, action: loginAction },

  { path: "/auth/register", element: <Register /> },
  { path: "/auth/logout", element: <Logout /> },
]);
 
export { router };
