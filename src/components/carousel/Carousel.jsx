import { useEffect, useState } from "react";

function Carousel() {
  const backgrounds = [
    "/fondoUno.webp",
    "/fondo-dos.jpg",
    "/fondo-tres.jpg",
    "/fondo-cuatro.webp",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  const currentBackground = backgrounds[index];

  return (
    <>
      <section
        id="seccionNumeroUno"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${currentBackground})`,
          transition: "transform 20000ms ease-out, opacity 1000ms",
        }}
      >
        <div>
          <h1>QUICK WASH</h1>
          <p className="slogan">Rapidez y brillo en cada lavado</p>
        </div>
      </section>
    </>
  );
}

export default Carousel;
