import ApexCharts from "apexcharts";
import { useEffect, useState } from "react";

function Graf() {
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("http://localhost:8081/api/registers", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const contador = {};
        data.forEach((reg) => {
          (reg.services || []).forEach((serv) => {
            contador[serv.name] = (contador[serv.name] || 0) + 1;
          });
        });
        setLabels(Object.keys(contador));
        setSeries(Object.values(contador));
      });
  }, []);

  const getChartOptions = () => {
    return {
      series: series.length ? series : [1], // Evita error si está vacío
      colors: [
        "#E81C2E",
        "#F25757",
        "#FFB3B3",
        "#D9D9D9",
        "#F2A2A2",
        "#B22222",
      ],
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
                  return sum;
                },
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                formatter: function (value) {
                  return value + " servicios";
                },
              },
            },
            size: "80%",
          },
        },
      },
      labels: labels.length ? labels : ["Sin datos"],
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
  }, [series, labels]);

  return <div className="py-6" id="donut-chart"></div>;
}

export default Graf;
