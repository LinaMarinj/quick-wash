import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/guest/home";
import DashBoardAdmin from "../pages/private/DashBoardAdmin";
import DashBoardOperator from "../pages/private/DashBoardOperator";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<DashBoardAdmin />} />
        <Route path="/operator" element={<DashBoardOperator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
