import "./NotFound.css"

function NotFound() {
  return (
    <section
      id="not-found"
      className="grid justify-center items-center h-screen text-center relative"
    >
      <div className="relative overflow-hidden">
        <h1 id="errorNumber" className="font-bold block m-auto">
          404
        </h1>
        <p className="text-4xl font-semibold text-center">Oops!</p>
        <p className="mt-1 text-2xl text-gray-800 font-medium text-center">
          <br />
          Lo sentimos, página no encontrada
        </p>
        <img className="carro-rojo" src="/carro-rojo.webp" alt="" />
      </div>
    </section>
  );
}

export default NotFound;
