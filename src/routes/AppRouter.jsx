import Home from "../pages/guest/home";
import DashBoardAdmin from "../pages/private/DashBoardAdmin";
import DashBoardOperator from "../pages/private/DashBoardOperator";
import NotFound from "../pages/guest/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import FromRegisterVehicles from "../pages/private/FormRegisterVehicles";
import LoginAdmin from "../pages/guest/LoginAdmin";
import RutaProtegida from "../components/RutaProtegida";

function AppRouter() {
  const rutas = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <RutaProtegida proteger={<DashBoardAdmin />} />,
    },
    {
      path: "/operator",
      element: <RutaProtegida proteger={<DashBoardOperator />} />,
    },
    {
      path: "/login",
      element: <LoginAdmin />,
    },
    {
      path: "/registervehicles",
      element: <FromRegisterVehicles/>,
    },
    
    {
      path: "*",
      element: <NotFound />,
    },
  ];
  return <RouterProvider router={createBrowserRouter(rutas)} />;
}

export default AppRouter;
