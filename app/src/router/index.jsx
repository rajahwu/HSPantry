import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages";
import { pantryItemsLoader } from './loaders';

const router = createBrowserRouter([{ path: "/", element: <HomePage />, loader: pantryItemsLoader }]);

export { router };
