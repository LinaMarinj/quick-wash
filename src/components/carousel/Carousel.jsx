import { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel() {
  const backgrounds = [
    "/fondoUno.webp",
    "/fondo-dos.jpg",
    "/fondo-tres.jpg",
    "/fondo-cuatro.webp",
  ];

  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 50); // activar transición inicial
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
      setMounted(true); // Asegura que siempre esté en true después del primer cambio
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="seccionNumeroUno">
      {backgrounds.map((bg, i) => (
        <div
          key={bg}
          className="carousel-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})`,
            opacity: i === index ? 1 : 0,
            pointerEvents: i === index ? "auto" : "none",
            transform:
              i === index
                ? mounted
                  ? "scale(1)"
                  : "scale(1.50)"
                : "scale(1.50)",
            transition: "transform 20000ms ease-out, opacity 1000ms",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <h1>QUICK WASH</h1>
        <p className="slogan">Rapidez y brillo en cada lavado</p>
      </div>
    </section>
  );
}

export default Carousel;
