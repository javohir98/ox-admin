import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../components/PrivateRoute";
import AppLayout from "../layout";
import Products from "../pages/products";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <AppLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "/", element: <Products /> },
      { path: "/products", element: <Products withToolbar /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
