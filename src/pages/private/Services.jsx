import MenuPrivate from "../../components/menu/MenuPrivate";
import ControlPanel from "../../components/aside/ControlPanel";
import Basico from "../../assets/img/services/basico.jpg";
import Full from "../../assets/img/services/full.jpg";
import Encerado from "../../assets/img/services/encerado.jpg";
import Pulido from "../../assets/img/services/pulido.jpg";
import Aspirado from "../../assets/img/services/aspirar.jpg";
import Motor from "../../assets/img/services/motor.jpg";
import Tapiceria from "../../assets/img/services/tapiceria.jpg";
import Desinfeccion from "../../assets/img/services/desinfeccion.jpg";
import Chasis from "../../assets/img/services/chasis.jpg";
import QuestionImg from "../../assets/img/icons/question.png";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const servicios = [
  {
    img: Basico,
    title: "Lavado Básico",
    desc: "Limpieza de carrocería y enjuague a presión.",
    price: "$30.000",
  },
  {
    img: Full,
    title: "Lavado Full",
    desc: "Exterior + interior en un solo servicio.",
    price: "$45.000",
  },
  {
    img: Encerado,
    title: "Encerado",
    desc: "Aplicación de cera para protección y brillo.",
    price: "$60.000",
  },
  {
    img: Pulido,
    title: "Pulido",
    desc: "Eliminación de rayones leves y restauración de brillo.",
    price: "$52.000",
  },
  {
    img: Aspirado,
    title: "Aspirado",
    desc: "Aspirado rápido de asientos y piso.",
    price: "$20.000",
  },
  {
    img: Motor,
    title: "Lavado de motor",
    desc: "Limpieza cuidadosa del compartimento del motor.",
    price: "$40.000",
  },
  {
    img: Tapiceria,
    title: "Limpieza de tapicería",
    desc: "Tratamiento y limpieza profunda de asientos.",
    price: "$100.000",
  },
  {
    img: Desinfeccion,
    title: "Desinfección",
    desc: "Aplicación de desinfectante en todo el vehículo.",
    price: "$40.000",
  },
  {
    img: Chasis,
    title: "Lavado de chasis",
    desc: "Enjuague a presión de la parte inferior del vehículo.",
    price: "$90.000",
  },
];

function Services() {
  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: "#tour-example",
        popover: {
          title: "Bienvenido a la Ayuda",
          description: "Da clic en el botón de siguiente o en la x para salir.",
          side: "left",
          align: "start",
        },
      },
      {
        element: "#services-actuales",
        popover: {
          title: "Sección servicios",
          description:
            "En este espacio encontrarás la información de los servicios que maneja Quick Wash.",
          side: "bottom",
          align: "start",
        },
      },
      {
        popover: {
          title: "¡Excelente!",
          description: "Ya tienes más detalles de los servicios.",
        },
      },
    ],
  });

  return (
    <>
      <MenuPrivate />
      <section className="bg-[#F2F2F2] p-5 grid grid-cols-4 gap-4">
        <ControlPanel />

        <div id="servicios" className=" col-span-3">
          <header className="mb-6">
            <h1 className="flex justify-center text-4xl font-bold text-gray-900 m-5">
              Servicios Quick Wash
            </h1>
          </header>

          <section
            id="services-actuales"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
          >
            {servicios.map((servicio, idx) => (
              <div
                key={idx}
                className="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <img
                  className="w-full"
                  src={servicio.img}
                  alt={servicio.title}
                />
                <div className="bg-white px-6 py-4">
                  <div className="font-bold text-xl mb-2">{servicio.title}</div>
                  <p className="text-gray-700 text-base">{servicio.desc}</p>
                  <p className="font-bold text-sm mb-2">{servicio.price}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="flex justify-end w-full">
            <img
              className="cursor-pointer"
              src={QuestionImg}
              onClick={() => driverObj.drive()}
            />
          </section>
        </div>
      </section>
    </>
  );
}

export default Services;
