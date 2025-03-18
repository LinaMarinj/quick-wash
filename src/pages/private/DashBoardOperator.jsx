import "./DashBoardOperator.css";
import Auto from "../../assets/img/dashBoard/auto.svg";
import Premio from "../../assets/img/dashBoard/premio.svg";
import Servicio from "../../assets/img/dashBoard/servicio.svg";
import Salir from "../../assets/img/dashBoard/salir.png";
import UserOperator from "../../assets/img/dashBoard/user-operator.webp";
import ApexCharts from "apexcharts";
import { useEffect } from "react";

function DashBoardOperator() {
  const getChartOptions = () => {
    return {
      series: [40, 30, 20, 10],
      colors: ["#E81C2E", "#F25757", "#FFB3B3", "#D9D9D9"], // Paleta de rojos y grises combinada
      chart: {
        height: 320,
        width: "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: "Inter, sans-serif",
              },
              total: {
                showAlways: true,
                show: true,
                label: "Servicios",
                fontFamily: "Inter, sans-serif",
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  return sum; // Texto total ajustado
                },
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                formatter: function (value) {
                  return value + " servicios"; // Formato de valor ajustado
                },
              },
            },
            size: "80%",
          },
        },
      },
      labels: ["Lavado externo", "Lavado interno", "Brillado", "Polichado"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
    };
  };

  useEffect(() => {
    const chart = new ApexCharts(
      document.getElementById("donut-chart"),
      getChartOptions()
    );
    chart.render();
    return () => chart.destroy();
  }, []);

  return (
    <>
      <header>
        <nav id="navBar">
          <img id="logo" src="/logo.png" alt="Logo Quick Wash" />
          <div>
            <ul>
              <li>
                <a href="#tablaRecompensas">Recompensas</a>
              </li>
              <li>
                <a href="../index.html" id="">
                  Salir
                </a>
              </li>
            </ul>
            <img id="avatarUno" src={UserOperator} alt="foto personal" />
          </div>
        </nav>
      </header>

      <main id="mainDasboard">
        <section id="encabezado">
          <h1>Centro de Operaciones Quick Wash</h1>
        </section>

        <section className="grid grid-cols-4 grid-rows-3 gap-4">
          <div id="parteUno" className="row-span-5">
            <ul>
              <h2>Panel de Control</h2>
              <li>
                <img src={Auto} alt="" />
                Ingresar Vehículo
              </li>
              <li>
                <img src={Premio} alt="" /> Sistema de Recompensas
              </li>
              <li>
                <img src={Salir} alt="" /> Salir
              </li>
            </ul>
          </div>

          <div id="parteDos">
            <h3>Vehículos Ingresados</h3>
            <p style={{ textAlign: "center", fontSize: "3rem", margin: "5px" }}>
              100
            </p>
            <p>En total</p>
          </div>
          <div id="parteTres">
            <h3>Servicios Realizados</h3>
            <p style={{ textAlign: "center", fontSize: "3rem", margin: "5px" }}>
              100
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

          <div id="parteCinco" class="row-span-3 col-start-2 row-start-2">
            <p> Resumen de Servicios Realizados</p>
            <div className="py-6" id="donut-chart"></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default DashBoardOperator;
