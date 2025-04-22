
import './LoginAdmin.css';
import { usuarios } from '../../services/database';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { alerta, generarToken} from '../../helpers/funciones';

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
      let tokenAcceso = generarToken()
      localStorage.setItem("token", tokenAcceso) 
      alerta("Bienvenido", "Acceso al sistema", "success");
      redireccion("/admin");
    } else {
      alerta("Error", "Error de credenciales", "error");
    }
  }



  return (
    <div className="container">
      <div className="left-section">
        <h1>Quick Wash</h1>
        <p>El Mejor Servicio De AutoLavado Para Tu Vehiculo</p>
        <button className="read-more">Cotiza o Pregunta Por Nuestros Servicios Aqui</button>
      </div>

      <div className="right-section">
        <h2>Hola De nuevo!</h2>
        <p>Ingresa tus datos</p>
        <form id="loginForm">
          <input type="email" id="email" placeholder="Correo"  onChange={(e) => setUser(e.target.value)} required />
          <input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="button" onClick={iniciarSesion}>Login</button>
        </form>
        <p className="forgot-password">¿Olvidaste tu contrasena?</p>
      </div>
    </div>
  );
}

export default LoginAdmin;