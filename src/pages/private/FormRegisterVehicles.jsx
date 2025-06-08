import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import MenuPrivate from "../../components/menu/MenuPrivate";

function FormRegisterVehicles() {
  const [placa, setPlaca] = useState("");

  const [marcas, setMarcas] = useState([]);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState("");

  const [color, setColor] = useState("");

  const [tiposVehiculo, setTiposVehiculo] = useState([]);
  const [tipoVehiculoSeleccionado, setTipoVehiculoSeleccionado] = useState("");

  const [servicios, setServicios] = useState([]);
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);

  const [correoCliente, setCorreoCliente] = useState("");

  const [fechaServicio, setFechaServicio] = useState("");

  const [error, setError] = useState(undefined);

  const myHeaders = new Headers();
  myHeaders.append("Accept", "*/*");

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  function buscarTiposVehiculo() {
    // Función de  busueda de tipos de vehículo
    return fetch("http://localhost:8081/api/typevehicles", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `Error al cargar tipos de vehículo: ${response.status}`
          );
        }
      })
      .then((data) => {
        setTiposVehiculo(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }

  function buscarMarcas() {
    // Función de  busueda de tipos de vehículo
    return fetch("http://localhost:8081/api/brands", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error al cargar las marcas: ${response.status}`);
        }
      })
      .then((data) => {
        setMarcas(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }

  function buscarServicios() {
    // Función de  busueda de tipos de vehículo
    return fetch("http://localhost:8081/api/services", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error al cargar los servicios: ${response.status}`);
        }
      })
      .then((data) => {
        setServicios(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }

  function buscarFecha() {
    const interval = setInterval(() => {
      const fechaDelSistema = new Date();
      setFechaServicio(
        fechaDelSistema.toLocaleDateString() +
          "-" +
          fechaDelSistema.toLocaleTimeString()
      );
    }, 1000);

    return () => clearInterval(interval);
  }

  useEffect(() => {
    buscarTiposVehiculo();
    buscarMarcas();
    buscarServicios();
    buscarFecha();
  }, []);

  const registroVehiculoExitoso = () => {
    Swal.fire({
      title: "Vehículo ingresado correctamente",
      html: `
        <div>
          <div class="mb-4">✔️</div>
          <p class="mb-4">
            Visita Número: 10
          </p>
          <p class="font-bold mb-4">
            Premio de Fidelización:
          </p>
          <div class="mb-4">
            Shampoo
              <img src="/shampoo.webp" alt="Shampoo" style="width: 150px; margin: auto;" />
          </div>
        </div>
      `,
      showConfirmButton: true,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#e60023",
      allowOutsideClick: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const datos = {
      placa,
      marca: marcaSeleccionada,
      color: color,
      tipo: tipoVehiculoSeleccionado,
      correo: correoCliente,
      servicios: serviciosSeleccionados,
      fecha: fechaServicio,
    };

    fetch("https://api/services/{id}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (response.ok) {
          registroVehiculoExitoso();
        } else {
          throw new Error("Error al registrar el vehículo");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleServicioChange = (servicioId) => {
    const id = Number(servicioId);
    if (serviciosSeleccionados.includes(id)) {
      setServiciosSeleccionados(
        serviciosSeleccionados.filter((sid) => sid !== id)
      );
    } else {
      setServiciosSeleccionados([...serviciosSeleccionados, id]);
    }
  };

  if (error) {
    return <div>Error al cargar los datos: {error}</div>;
  }

  return (
    <>
      <MenuPrivate />

      <section className="flex flex-col items-center px-4 mt-5 mb-5">
        <h1 className="text-2xl font-bold mb-4">Registro de Vehículos</h1>

        <form className="w-full max-w-sm space-y-2" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Placa</label>
              <input
                required
                type="text"
                name="placa"
                className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
                value={placa}
                onChange={(e) => setPlaca(e.target.value)}
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Marca</label>
              <select
                id="marcas"
                className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
                value={marcaSeleccionada}
                onChange={(e) => setMarcaSeleccionada(e.target.value)}
              >
                <option value="">Seleccione</option>
                {marcas.map((marca) => (
                  <option key={marca.id} value={marca.name}>
                    {marca.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Color</label>
              <input
                required
                type="text"
                name="color"
                className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Tipo</label>
              <select
                id="tipo"
                className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
                value={tipoVehiculoSeleccionado}
                onChange={(e) => setTipoVehiculoSeleccionado(e.target.value)}
              >
                <option value="">Seleccione</option>
                {tiposVehiculo.map((tipo) => (
                  <option key={tipo.id} value={tipo.name}>
                    {tipo.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className=" gap-2">
            <label className="block text-sm font-medium mb-1">Correo</label>
            <input
              required
              type="email"
              name="correo"
              placeholder="Correo"
              className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
              value={correoCliente}
              onChange={(e) => setCorreoCliente(e.target.value)}
            />
          </div>

          <h2 className="text-base text-gray-500 font-semibold mt-2">
            Servicios
          </h2>

          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            {servicios.map((servicio) => (
              <label key={servicio.id} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-red-500"
                  value={servicio.id}
                  checked={serviciosSeleccionados.includes(servicio.id)}
                  onChange={() => handleServicioChange(servicio.id)}
                />
                {servicio.name}
              </label>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Fecha</label>
            <p lassName="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1">
              {fechaServicio}
            </p>
          </div>

          <p className="text-gray-500 text-xs italic text-center">
            Ingrese todos los datos correctamente
          </p>

          <div className="flex justify-center gap-2 mt-2">
            <Link to="/admin">
              <button
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded"
                type="button"
              >
                Cancelar
              </button>
            </Link>

            <button
              className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded"
              type="submit"
            >
              Registrar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default FormRegisterVehicles;
