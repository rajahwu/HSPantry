import { Login, Logout, Register } from "@components/auth/";
import { ErrorPage } from "@components/base/";
import { Pantry } from "@components/services/pantry";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages";
import { pantryItemsLoader } from "./loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/pantry",
      element: <Pantry />,
      loader: pantryItemsLoader,
    }],
  },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/auth/logout", element: <Logout /> },
]);

export { router };
