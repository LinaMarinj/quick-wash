import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alerta, generarToken } from "../../helpers/funciones";
import { usuarios } from "../../services/database";
import "./LoginAdmin.css";
import { Link } from "react-router-dom";

function LoginAdmin() {
  const [getUser, setUser] = useState("");
  const [getPassword, setPassword] = useState("");
  let redireccion = useNavigate();

  function buscarUsuario() {
    let usuario = usuarios.find(
      (item) => getUser === item.correo && getPassword === item.contrasena
    );
    return usuario;
  }

  function iniciarSesion() {
    if (buscarUsuario()) {
      let tokenAcceso = generarToken();
      localStorage.setItem("token", tokenAcceso);
      alerta("Bienvenido", "Acceso al sistema", "success");
      redireccion("/admin");
    } else {
      alerta("Error", "Error de credenciales", "error");
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      iniciarSesion();
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <h1 className="font-bold ">Quick Wash</h1>
        <p className="font-semibold">
          El Mejor Servicio De AutoLavado Para Tu Vehiculo
        </p>
      </div>

      <div className="right-section">
        <h2>Hola De nuevo!</h2>
        <p>Ingresa tus datos</p>
        <form id="loginForm" onSubmit={(e) => e.preventDefault()}>
          {" "}
          {}
          <input
            type="email"
            id="email"
            placeholder="Correo"
            onChange={(e) => setUser(e.target.value)}
            required
            className="login-input"
            onKeyPress={handleKeyPress}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
            onKeyPress={handleKeyPress}
          />
          <button
            type="button"
            onClick={iniciarSesion}
            className="login-button"
          >
            Login
          </button>
        </form>
        <p className="forgot-password">¿Olvidaste tu contrasena?</p>
        <Link to="/">
          <button
            type="button"
            className="text-md mt-5 p-3 rounded-3xl border-2"
          >
            Volver al Inicio
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginAdmin;
