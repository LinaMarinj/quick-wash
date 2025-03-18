import { Link } from "react-router-dom";
import "./MenuGuest.css";

function MenuGuest() {
  return (
    <header>
      <nav>
        <img src="/logo.png" alt="" />
        <ul>
          <li>
            {" "}
            <a href="#seccionNumeroDos">¿Quienes somos?</a>
          </li>

          <li>
            {" "}
            <a href="#tres">Nuestros servicios</a>
          </li>

          <li>
            <a href="#historico">Fidelización </a>
          </li>

          <li>
            {" "}
            <a href="#seccionNumeroCinco">Contáctanos </a>
          </li>

          <Link to="/admin">
            <button>¿Eres Administrador?</button>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default MenuGuest;
