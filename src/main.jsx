import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./components/footer/Footer";
import "./index.css";
import Home from "./pages/guest/home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <Footer />
  </StrictMode>
);
