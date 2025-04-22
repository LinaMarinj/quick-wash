import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section
      id="not-found"
      className="grid justify-center items-center h-screen text-center relative overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <h1 id="errorNumber" className="font-bold block m-auto">
          404
        </h1>
        <p className="text-3xl font-semibold text-center">Oops!</p>
        <p className="mt-1 text-2xl text-gray-800 font-medium text-center">
          <br />
          Lo sentimos, página no encontrada
        </p>
        <Link to="/">
          <button
            id="volver-inicio"
            className="text-md mt-10 p-3 rounded-3xl border-2"
          >
            Volver al Inicio
          </button>
        </Link>

        <img className="carro-rojo" src="/carro-rojo.webp" alt="carro" />
      </div>
    </section>
  );
}

export default NotFound;
