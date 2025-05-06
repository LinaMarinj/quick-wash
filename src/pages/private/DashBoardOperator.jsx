import "./DashBoardOperator.css";
import Auto from "../../assets/img/dashBoard/auto.svg";
import Premio from "../../assets/img/dashBoard/premio.svg";
import Salir from "../../assets/img/dashBoard/salir.png";
import UserOperator from "../../assets/img/dashBoard/user-operator.webp";
import Graf from "../../components/servicesGraf/Graf";
import { Link } from "react-router-dom";
import ControlPanel from "../../components/aside/ControlPanel";
import MenuPrivate from "../../components/menu/MenuPrivate";

function DashBoardOperator() {
  return (
    <>
      <MenuPrivate />

      <main id="mainDasboard">
        <section id="encabezado">
          <h1>Centro de Operaciones Quick Wash</h1>
        </section>

        <section className="grid grid-cols-4 grid-rows-3 gap-4">
          <ControlPanel />

          <div id="parteDos">
            <h3>Vehículos Ingresados</h3>
            <p style={{ textAlign: "center", fontSize: "3rem", margin: "5px" }}>
              100
            </p>
            <p>En total</p>
          </div>
          <div id="parteTres">
            <h3>Servicios Realizados</h3>
            <p style={{ textAlign: "center", fontSize: "3rem", margin: "5px" }}>
              100
            </p>
            <p>En total</p>
          </div>
          <div id="parteCuatro">
            <h3>Premios Entregados</h3>
            <p style={{ textAlign: "center", fontSize: "3rem", margin: "5px" }}>
              10
            </p>
            <p>En total</p>
          </div>

          <div id="parteCinco" class="row-span-3 col-start-2 row-start-2">
            <p> Resumen de Servicios Realizados</p>
            <Graf />
          </div>
        </section>
      </main>
    </>
  );
}

export default DashBoardOperator;
