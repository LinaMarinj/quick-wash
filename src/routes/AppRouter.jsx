import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RutaProtegida from "../components/RutaProtegida";
import Home from "../pages/guest/home";
import LoginAdmin from "../pages/guest/LoginAdmin";
import NotFound from "../pages/guest/NotFound";
import DashBoardAdmin from "../pages/private/DashBoardAdmin";
import DashBoardOperator from "../pages/private/DashBoardOperator";
import FromRegisterVehicles from "../pages/private/FormRegisterVehicles";
import Recompensas from "../pages/private/Recompensas";
import Services from "../pages/private/Services";

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
      element: <RutaProtegida proteger={<FromRegisterVehicles />} />,
    },
    {
      path: "/recompensas",
      element: <RutaProtegida proteger={<Recompensas />} />,
    },
    {
      path: "/services",
      element: <RutaProtegida proteger={<Services/>} />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
  return <RouterProvider router={createBrowserRouter(rutas)} />;
}

export default AppRouter;
