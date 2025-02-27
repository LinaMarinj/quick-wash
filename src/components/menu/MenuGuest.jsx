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

          <a href="admin2/dashboard.html">
            <button>¿Eres Administrador?</button>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default MenuGuest;
