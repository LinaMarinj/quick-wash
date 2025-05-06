import { Link } from "react-router-dom";
import User from "../../assets/img/dashBoard/user.webp";
import Graf from "../../components/servicesGraf/Graf";
import ControlPanel from "./ControlPanel";
import "./DashBoardAdmin.css";

function DashBoardAdmin() {
  return (
    <>
      <header>
        <nav id="navBar">
          

          <Link to="/">
  <img id="logo" src="/logo.png" alt="Logo Quick Wash" style={{ cursor: "pointer" }} />
</Link>

          <div>
            <ul>
              <li>
                <a href="#tablaServicios">Servicios</a>
              </li>
              <li>

                <Link to="/Recompensas" href="#tablaRecompensas">Recompensas</Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("token");
                  }}
                >
                  Salir
                </Link>
              </li>
            </ul>
            <img id="avatarUno" src={User} alt="foto personal" />
          </div>
        </nav>
      </header>

      <main id="mainDasboard">
        <section id="encabezado">
          <h1>Administración de Servicios Quick Wash</h1>
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

          <div id="parteCinco" className="row-span-3 col-start-2 row-start-2">
            <p> Resumen de Servicios Realizados</p>
            <Graf />
          </div>
        </section>
      </main>
    </>
  );
}

export default DashBoardAdmin;
