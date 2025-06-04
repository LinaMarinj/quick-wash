import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import MenuPrivate from "../../components/menu/MenuPrivate";

function FormRegisterVehicles() {
  const [placa, setPlaca] = useState("");
  const [marcas, setMarcas] = useState([]);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState("");
  const [colores, setColores] = useState([]); // Puedes cargar colores desde la API si lo deseas
  const [colorSeleccionado, setColorSeleccionado] = useState("");
  const [tiposVehiculo, setTiposVehiculo] = useState([]);
  const [tipoVehiculoSeleccionado, setTipoVehiculoSeleccionado] = useState("");
  
  const [servicios, setServicios] = useState([]);
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);
  const [fechaServicio, setFechaServicio] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // URLs de la API (¡Reemplaza con tus URLs reales!)
  const API_URL_MARCAS = "TU_URL_DE_LA_API/marcas";
  const API_URL_TIPOS_VEHICULO = "TU_URL_DE_LA_API/tipos-vehiculo";
  const API_URL_SERVICIOS = "TU_URL_DE_LA_API/servicios";

  // Opciones para fetch (puedes personalizar según tu API)
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    const buscarMarcas = async () => {
      try {
        const response = await fetch(API_URL_MARCAS, requestOptions);
        if (!response.ok) {
          throw new Error(`Error al cargar marcas: ${response.status}`);
        }
        const data = await response.json();
        setMarcas(data);
      } catch (err) {
        setError(err.message);
      }
    };

    const buscarTiposVehiculo = async () => {
      try {
        const response = await fetch(API_URL_TIPOS_VEHICULO, requestOptions);
        if (!response.ok) {
          throw new Error(`Error al cargar tipos de vehículo: ${response.status}`);
        }
        const data = await response.json();
        setTiposVehiculo(data);
      } catch (err) {
        setError(err.message);
      }
    };

    useEffect(() => {
      const cargarDatos = async () => {
        try {
          await buscarMarcas();
          await buscarTiposVehiculo();
          
        } finally {
          setLoading(false);
        }
      };
      cargarDatos();
    }, []);

    buscarMarcas();
    buscarTiposVehiculo(); 
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
    // Aquí podrías enviar los datos del formulario, incluyendo marcaSeleccionada,
    // tipoVehiculoSeleccionado y serviciosSeleccionados
    console.log({
      placa,
      marca: marcaSeleccionada,
      color: colorSeleccionado,
      tipo: tipoVehiculoSeleccionado,
      nombre: nombreCliente,
      apellido: apellidoCliente,
      telefono: telefonoCliente,
      correo: correoCliente,
      servicios: serviciosSeleccionados,
      fecha: fechaServicio,
    });
    registroVehiculoExitoso();
    // También podrías resetear el formulario aquí si es necesario
  };

  const handleServicioChange = (servicioId) => {
    if (serviciosSeleccionados.includes(servicioId)) {
      setServiciosSeleccionados(serviciosSeleccionados.filter((id) => id !== servicioId));
    } else {
      setServiciosSeleccionados([...serviciosSeleccionados, servicioId]);
    }
  };

  if (loading) {
    return <div>Cargando datos...</div>;
  }

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
                  <option key={marca.id} value={marca.nombre}>
                    {marca.nombre}
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
                value={colorSeleccionado}
                onChange={(e) => setColorSeleccionado(e.target.value)}
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
                  <option key={tipo.id} value={tipo.nombre}>
                    {tipo.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <h2 className="text-base text-gray-500 font-semibold mt-2">
            Cliente
          </h2>

          <div className="flex gap-2">
            <input
              required
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="w-1/2 border bg-gray-50 border-gray-300 rounded px-2 py-1"
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
            />
            <input
              required
              type="text"
              name="apellido"
              placeholder="Apellido"
              className="w-1/2 border bg-gray-50 border-gray-300 rounded px-2 py-1"
              value={apellidoCliente}
              onChange={(e) => setApellidoCliente(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <input
              required
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              className="w-1/2 border bg-gray-50 border-gray-300 rounded px-2 py-1"
              value={telefonoCliente}
              onChange={(e) => setTelefonoCliente(e.target.value)}
            />
            <input
              required
              type="email"
              name="correo"
              placeholder="Correo"
              className="w-1/2 border bg-gray-50 border-gray-300 rounded px-2 py-1"
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
                {servicio.nombre}
              </label>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Fecha</label>
            <input
              type="date"
              className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
              value={fechaServicio}
              onChange={(e) => setFechaServicio(e.target.value)}
            />
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
