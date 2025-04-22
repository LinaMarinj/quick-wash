
import './LoginAdmin.csss';

function LoginAdmin() {
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
          <input type="email" id="email" placeholder="Correo" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="forgot-password">¿Olvidaste tu contrasena?</p>
      </div>
    </div>
  );
}

export default LoginAdmin;