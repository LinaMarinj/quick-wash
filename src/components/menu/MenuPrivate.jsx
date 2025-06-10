import { Link } from "react-router-dom";
import { alerta } from "../../helpers/funciones.js";
import User from "../../assets/img/dashBoard/user.webp";
import { useNavigate } from "react-router-dom";

function MenuPrivate() {
  let redireccion = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    redireccion("/");
    alerta("Bai", "Cerrando sesión", "info");
  }

  return (
    <header>
      <nav id="navBar">
        <Link to="/">
          <img
            id="logo"
            src="/logo.png"
            alt="Logo Quick Wash"
            style={{ cursor: "pointer" }}
          />
        </Link>

        <div>
          <ul>
            <li>
              <Link to="/admin">Panel de Control</Link>
            </li>
            <li>
              <Link to="/Recompensas" href="#tablaRecompensas">
                Recompensas
              </Link>
            </li>

            <li>
              <Link to="/services" href="#tablaServicios">
                Servicios
              </Link>
            </li>

            <li>
              <button type="button" onClick={cerrarSesion}>
                Salir
              </button>
            </li>
          </ul>
          <img id="avatarUno" src={User} alt="foto personal" />
        </div>
      </nav>
    </header>
  );
}

export default MenuPrivate;
