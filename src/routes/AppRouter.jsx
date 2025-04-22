import Home from "../pages/guest/home";
import DashBoardAdmin from "../pages/private/DashBoardAdmin";
import DashBoardOperator from "../pages/private/DashBoardOperator";
import NotFound from "../pages/guest/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

function AppRouter() {
  const rutas = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <DashBoardAdmin />,
    },
    {
      path: "/operator",
      element: <DashBoardOperator />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
  return <RouterProvider router={createBrowserRouter(rutas)} />;
}

export default AppRouter;
