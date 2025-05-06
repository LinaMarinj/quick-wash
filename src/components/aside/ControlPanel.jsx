import React from "react";
import { Link } from "react-router-dom";
import Auto from "../../assets/img/dashBoard/auto.svg";
import Premio from "../../assets/img/dashBoard/premio.svg";
import Servicio from "../../assets/img/dashBoard/servicio.svg";
import Salir from "../../assets/img/dashBoard/salir.png";

function ControlPanel() {
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
          <Link to="/admin">
            <img src={Servicio} alt="" /> Servicios
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Salir} alt="" /> Salir
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ControlPanel;