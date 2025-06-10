import React from "react";
import { Link } from "react-router-dom";
import Auto from "../../assets/img/dashBoard/auto.svg";
import Premio from "../../assets/img/dashBoard/premio.svg";
import Servicio from "../../assets/img/dashBoard/servicio.svg";
import { useNavigate } from "react-router-dom";
import { alerta } from "../../helpers/funciones.js";

function ControlPanel() {
  let redireccion = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    redireccion("/");
    alerta("Bai", "Cerrando sesión", "info");
  }

  return (
    <div id="parteUno" className="row-span-5">
      <ul>
        <h2>Panel de Control</h2>
        <li>
          <Link to="/registervehicles">
            <img src={Auto} alt="" />
            Ingresar Vehículo
          </Link>
        </li>
        <li>
          <Link to="/Recompensas">
            <img src={Premio} alt="" /> Recompensas
          </Link>
        </li>
        <li>
          <Link to="/services">
            <img src={Servicio} alt="" /> Servicios
          </Link>
        </li>

        <button
          type="button"
          className="bg-[#e81c2e] m-3 p-2 text-white rounded-lg"
          onClick={cerrarSesion}
        >
          Salir
        </button>
      </ul>
    </div>
  );
}

export default ControlPanel;
