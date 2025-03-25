import "./DashBoardOperator.css";
import Auto from "../../assets/img/dashBoard/auto.svg";
import Premio from "../../assets/img/dashBoard/premio.svg";
import Salir from "../../assets/img/dashBoard/salir.png";
import UserOperator from "../../assets/img/dashBoard/user-operator.webp";
import Graf from "../../components/servicesGraf/Graf";

function DashBoardOperator() {

  return (
    <>
      <header>
        <nav id="navBar">
          <img id="logo" src="/logo.png" alt="Logo Quick Wash" />
          <div>
            <ul>
              <li>
                <a href="#tablaRecompensas">Recompensas</a>
              </li>
              <li>
                <a href="../index.html" id="">
                  Salir
                </a>
              </li>
            </ul>
            <img id="avatarUno" src={UserOperator} alt="foto personal" />
          </div>
        </nav>
      </header>

      <main id="mainDasboard">
        <section id="encabezado">
          <h1>Centro de Operaciones Quick Wash</h1>
        </section>

        <section className="grid grid-cols-4 grid-rows-3 gap-4">
          <div id="parteUno" className="row-span-5">
            <ul>
              <h2>Panel de Control</h2>
              <li>
                <img src={Auto} alt="" />
                Ingresar Vehículo
              </li>
              <li>
                <img src={Premio} alt="" /> Sistema de Recompensas
              </li>
              <li>
                <img src={Salir} alt="" /> Salir
              </li>
            </ul>
          </div>

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
