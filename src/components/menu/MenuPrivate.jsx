import { Link } from "react-router-dom";
import User from "../../assets/img/dashBoard/user.webp";

function MenuPrivate() {
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
  );
}

export default MenuPrivate;
