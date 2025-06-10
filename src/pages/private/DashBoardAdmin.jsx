import Graf from "../../components/servicesGraf/Graf";
import ControlPanel from "../../components/aside/ControlPanel";
import MenuPrivate from "../../components/menu/MenuPrivate";
import "./DashBoardAdmin.css";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import QuestionImg from "../../assets/img/icons/question.png";
import { useState, useEffect } from "react";

function DashBoardAdmin() {
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
        element: "#navBar",
        popover: {
          title: "Menú",
          description:
            "Navega entre las secciones principales: <br><br>Panel de Control, Recompensas, Servicios y Salir. Siempre visible para acceder fácilmente a cualquier parte del sistema.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#parteUno",
        popover: {
          title: "Panel de control",
          description:
            "Acceso rapido para Registrar vehículos, ver lista de recompensas, ver servicios y salir, ",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#resumen",
        popover: {
          title: "Panel de Estadísticas",
          description:
            "Aquí puedes ver un resumen general de los vehículos ingresados, servicios realizados y premios entregados.<br><br>Ideal para tener una vista rápida del estado actual del negocio.",
          side: "left",
          align: "start",
        },
      },
      {
        popover: {
          title: "¡Excelente!",
          description: "Estás listo para comenzar.",
        },
      },
    ],
  });
  const [totalVehiculos, setTotalVehiculos] = useState(0);
  const [totalServicios, setTotalServicios] = useState(0);

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("http://localhost:8081/api/registers", requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error al obtener el total de las visitas.");
        }
      })
      .then((data) => {
        setTotalVehiculos(Array.isArray(data) ? data.length : data.total || 0);
      })
      .catch((error) => {
        console.error("Error al cargar cantidad de visitas:", error);
        setTotalVehiculos(0);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8081/api/registers", requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error al obtener los servicios.");
        }
      })
      .then((data) => {
        const total = Array.isArray(data)
          ? data.reduce((acc, reg) => acc + (reg.services?.length || 0), 0)
          : 0;
        setTotalServicios(total);
      })
      .catch((error) => {
        console.error("Error al cargar cantidad de servicios:", error);
        setTotalServicios(0);
      });
  }, []);

  return (
    <>
      <MenuPrivate />

      <main id="mainDasboard">
        <section>
          <h1 className="flex justify-center text-3xl font-bold text-gray-900 m-5">
            Administración de Servicios Quick Wash
          </h1>
        </section>

        <section id="resumen" className="grid grid-cols-4 grid-rows-3 gap-4">
          <ControlPanel />

          <div id="parteDos">
            <h3>Visitas Ingresadas</h3>
            <p style={{ textAlign: "center", fontSize: "3rem", margin: "5px" }}>
              {totalVehiculos}
            </p>
            <p>En total</p>
          </div>
          <div id="parteTres">
            <h3>Servicios Realizados</h3>
            <p style={{ textAlign: "center", fontSize: "3rem", margin: "5px" }}>
              {totalServicios}
            </p>
            <p>En total</p>
          </div>
          <div id="parteCuatro">
            <h3>Premios Entregados</h3>
            <p style={{ textAlign: "center", fontSize: "3rem", margin: "5px" }}>
              10
            </p>
            <p>En total</p>
          </div>

          <div id="parteCinco" className="row-span-3 col-start-2 col-end-5 row-start-2">
            <p> Resumen de Servicios Realizados</p>
            <Graf />
          </div>
        </section>

        <section className="flex justify-end w-full">
          <img
            className="cursor-pointer"
            src={QuestionImg}
            onClick={() => driverObj.drive()}
          />
        </section>
      </main>
    </>
  );
}

export default DashBoardAdmin;
