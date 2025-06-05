import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alerta } from "../../helpers/funciones";
import "./LoginAdmin.css";
import { Link } from "react-router-dom";

function LoginAdmin() {
  const [getUser, setUser] = useState("");
  const [getPassword, setPassword] = useState("");
  let redireccion = useNavigate();

  function buscarUsuario() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: getUser,
      password: getPassword,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch("http://localhost:8081/api/auth/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
      })
      .then((data) => {
        const accessToken = data.accessToken;
        if (accessToken) {
          const user = {
            accessToken: accessToken,
          };
          return user;
        } else {
          console.error(
            "El accessToken no se encontró en la respuesta de la API:",
            data
          );
          throw new Error(
            "El accessToken no se encontró en la respuesta de la API."
          );
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  function iniciarSesion() {
    buscarUsuario()
      .then((user) => {
        if (user && user.accessToken) {
          localStorage.setItem("token", user.accessToken);
          alerta("Bienvenido", "Acceso al sistema", "success");
          redireccion("/admin");
        } else {
          alerta("Error", "Error al obtener el token de acceso", "error");
        }
      })
      .catch((error) => {
        debugger;
        alerta("Error", "Error de credenciales", "error");
      });
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
