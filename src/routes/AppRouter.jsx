import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/guest/home";
import DashBoardAdmin from "../pages/private/DashBoardAdmin";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<DashBoardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
