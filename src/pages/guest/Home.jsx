import "./Home.css";
import MenuGuest from "../../components/menu/MenuGuest";
import WhoWeAre from "./WhoWeAre";
import OurServices from "./OurServices";
import History from "./History";
import Footer from "../../components/footer/Footer";
import "two-up-element";
import Carousel from "../../components/carousel/Carousel";
import Contacto from "../../../public/telefono.png";
import Ubicacion from "../../../public/ubicacion.png";
import Horario from "../../../public/horario.png";

function Home() {
  return (
    <>
      <MenuGuest />
      <main id="home">
        <Carousel />
        <WhoWeAre />
        <OurServices />
        <History />

        <section id="seccionNumeroCinco" className="bg-gray-800">
          <div>
            <h2 className="text-center p-5 text-4xl sm:text-5xl text-white font-bold">
              Contáctanos
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6 text-white">
            <div className="flex flex-col items-center text-center max-w-xs">
              <img
                src={Contacto}
                alt="Ícono de teléfono"
                className="w-10 h-10 mb-2"
              />
              <p className="text-lg p-5 font-bold">
                +57 300 000 0000 <br />
                <span className="font-normal text-sm">Llámanos</span>
              </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-xs">
              <img
                src={Ubicacion}
                alt="Ícono de ubicación"
                className="w-10 h-10 mb-2"
              />
              <p className="text-lg p-5 font-bold">
                Calle 45A #67B-23 <br />
                <span className="font-normal text-sm">
                  Barrio Laureles, Medellín
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-xs">
              <img
                src={Horario}
                alt="Ícono de reloj o calendario"
                className="w-10 h-10 mb-2"
              />
              <p className="text-lg p-5 font-bold">
                Lunes a sábado: 8:00 a.m. - 6:00 p.m. <br />
                <span className="font-normal text-sm">
                  Domingos y festivos: 9:00 a.m. - 2:00 p.m.
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
