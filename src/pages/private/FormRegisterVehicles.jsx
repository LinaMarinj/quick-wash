import { useState, useEffect, useDebugValue } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import MenuPrivate from "../../components/menu/MenuPrivate";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { usePagination } from "@table-library/react-table-library/pagination";
import Modal from "../../components/modal/Modal";
import Eliminar from "../../assets/img/icons/eliminar.png";
import Editar from "../../assets/img/icons/editar.png";
import { alertaConfirmar } from "../../helpers/funciones";
import ControlPanel from "../../components/aside/ControlPanel";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import QuestionImg from "../../assets/img/icons/question.png";

function FormRegisterVehicles() {
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
        element: "#btn-registrar-visita",
        popover: {
          title: "Registrar nueva visita",
          description:
            "Acceso al formulario para ingresar los datos del vehículo.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#table",
        popover: {
          title: "Tabla de registros",
          description:
            "Aquí puedes ver el registro de los vehículos ingresados al sistema con sus detalles.",
          side: "left",
          align: "start",
        },
      },
      {
        element: "#btn-acciones",
        popover: {
          title: "Botones de acciones",
          description: "Podrás editar y eliminar los datos registrados.",
          side: "bottom",
          align: "start",
        },
      },
      {
        popover: {
          title: "¡Excelente!",
          description: "Estás listo para gestionar los registros.",
        },
      },
    ],
  });

  const [open, setOpen] = useState(false);

  const [visitas, setVisitas] = useState([]);

  const [id, setId] = useState(0);

  const [placa, setPlaca] = useState("");

  const [marcas, setMarcas] = useState([]);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(0);

  const [color, setColor] = useState("");

  const [tiposVehiculo, setTiposVehiculo] = useState([]);
  const [tipoVehiculoSeleccionado, setTipoVehiculoSeleccionado] = useState(0);

  const [idVehiculo, setIdVehiculo] = useState(0);

  const [servicios, setServicios] = useState([]);
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);

  const [correoCliente, setCorreoCliente] = useState("");

  const [fechaServicio, setFechaServicio] = useState("");

  const [error, setError] = useState(undefined);

  const [registroEditar, setRegistroEditar] = useState(null);

  const theme = useTheme(getTheme());

  const pagination = usePagination(visitas, {
    state: {
      page: 0,
      size: 10,
    },
    onChange: onPaginationChange,
  });

  const COLUMNS = [
    { label: "Placa", renderCell: (item) => item.placa },
    { label: "Servicios", renderCell: (item) => item.servicios },
    { label: "Correo", renderCell: (item) => item.correo },
    { label: "Fecha", renderCell: (item) => item.fecha },
    { label: "Operador", renderCell: (item) => item.operador },
    {
      label: "Acciones",
      renderCell: (item) => (
        <div id="btn-acciones" className="flex gap-2">
          <img
            src={Eliminar}
            alt="Eliminar"
            title="Eliminar"
            className="w-5 h-5 m-2 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => alertaConfirmar(() => eliminarVisita(item.id))}
          />
          <img
            src={Editar}
            alt="Editar"
            title="Editar"
            className="w-5 h-5 m-2 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => cargarDatosEditar(item)}
          />
        </div>
      ),
    },
  ];

  const visitasTabla = visitas.map((item) => ({
    id: item.id,
    idVehiculo: item.vehicle?.id || 0,
    placa: item.vehicle?.plate || "",
    servicios: item.services.map((s) => s.name).join(", "),
    correo: item.email || "",
    fecha: item.registerDate
      ? new Date(item.registerDate).toLocaleString()
      : "",
    operador: item.user?.name || "",
    color: item.vehicle?.color || "",
    marca: item.vehicle?.brand || "",
    tipo: item.vehicle?.typeVehicle || "",
    serviciosOriginal: item.services || [],
  }));

  function onPaginationChange(action, state) {
    console.log(action, state);
  }

  const myHeaders = new Headers();
  myHeaders.append("Accept", "*/*");

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  function buscarVisitas() {
    // Función de búsqueda de visitas, ordena de más reciente a más antiguo
    return fetch("http://localhost:8081/api/registers", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error al cargar las visitas: ${response.status}`);
        }
      })
      .then((data) => {
        // Ordenar por fecha descendente (más reciente primero)
        const visitasOrdenadas = [...data].sort((a, b) => {
          const fechaA = new Date(a.registerDate).getTime();
          const fechaB = new Date(b.registerDate).getTime();
          return fechaB - fechaA;
        });
        setVisitas(visitasOrdenadas);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }

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
    buscarVisitas();
    buscarTiposVehiculo();
    buscarMarcas();
    buscarServicios();
    buscarFecha();
  }, []);

  const limpiarFormulario = () => {
    setId(0);
    setPlaca("");
    setMarcaSeleccionada(null);
    setColor("");
    setTipoVehiculoSeleccionado(null);
    setServiciosSeleccionados([]);
    setCorreoCliente("");
    // No limpiamos fechaServicio ni error porque son de sistema
  };

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
    }).then(() => {
      limpiarFormulario();
      setOpen(false);
    });
  };

  // Cambia obtenerVehiculo para que retorne el id:
  const obtenerVehiculo = async () => {
    const response = await fetch(
      "http://localhost:8081/api/vehicles",
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`Error al consultar los vehículos: ${response.status}`);
    }
    const vehiculos = await response.json();

    const vehiculoExistente = vehiculos.find(
      (vehiculo) => vehiculo.plate === placa
    );

    if (vehiculoExistente) {
      return vehiculoExistente.id;
    } else {
      const body = JSON.stringify({
        plate: placa,
        typeVehicle: tipoVehiculoSeleccionado,
        brand: marcaSeleccionada,
        color: color,
      });

      const requestOptionsPost = {
        method: "POST",
        headers: myHeaders,
        body: body,
        redirect: "follow",
      };

      const responsePost = await fetch(
        "http://localhost:8081/api/vehicles",
        requestOptionsPost
      );
      if (!responsePost.ok) {
        throw new Error(
          `Error al registrar el vehículo: ${responsePost.status}`
        );
      }
      const nuevoVehiculo = await responsePost.json();
      return nuevoVehiculo.id;
    }
  };

  const editarVehiculo = async () => {
    // Si no existe, lo creamos y obtenemos su id
    const body = JSON.stringify({
      plate: placa,
      typeVehicle: tipoVehiculoSeleccionado,
      brand: marcaSeleccionada,
      color: color,
    });

    const requestOptionsPut = {
      method: "PUT",
      headers: myHeaders,
      body: body,
      redirect: "follow",
    };

    const responsePost = await fetch(
      `http://localhost:8081/api/vehicles/${idVehiculo}`,
      requestOptionsPut
    );
    if (!responsePost.ok) {
      throw new Error(`Error al editar el vehículo: ${responsePost.status}`);
    }
    const nuevoVehiculo = await responsePost.json();
    setIdVehiculo(nuevoVehiculo.id);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 1. Buscar si el vehículo ya existe por placa
      const idVehiculoObtenido = await obtenerVehiculo();

      // 3. Preparar los datos para registrar el servicio
      const datos = {
        email: correoCliente,
        services: serviciosSeleccionados,
        vehicle: {
          id: idVehiculoObtenido,
        },
        user: {
          id: 2,
        },
      };

      // 4. Registrar el servicio
      const responseRegister = await fetch(
        "http://localhost:8081/api/registers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify(datos),
        }
      );

      debugger;
      if (responseRegister.ok) {
        buscarVisitas();
        registroVehiculoExitoso();
      } else {
        throw new Error("Error al registrar el servicio del vehículo");
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  const handleServicioChange = (servicioId) => {
    const id = Number(servicioId);

    if (serviciosSeleccionados.some((s) => s.id === id)) {
      // Eliminar el servicio del array
      setServiciosSeleccionados(
        serviciosSeleccionados.filter((s) => s.id !== id)
      );
    } else {
      // Agregar el servicio con la estructura { id: X }
      setServiciosSeleccionados([...serviciosSeleccionados, { id }]);
    }
  };

  if (error) {
    return <div>Error al cargar los datos: {error}</div>;
  }

  const eliminarVisita = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/registers/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        buscarVisitas();
      } else {
        throw new Error("Error al eliminar la visita");
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  const editarVisita = async () => {
    try {
      await editarVehiculo();

      const datos = {
        email: correoCliente,
        services: serviciosSeleccionados,
        vehicle: {
          id: idVehiculo,
        },
        user: {
          id: 2,
        },
      };
      const response = await fetch(
        `http://localhost:8081/api/registers/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify(datos),
        }
      );
      if (response.ok) {
        buscarVisitas();
        registroVehiculoExitoso();
      } else {
        throw new Error("Error al editar la visita");
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  const cargarDatosEditar = (item) => {
    setRegistroEditar(true);
    setIdVehiculo(item.idVehiculo);
    setId(item.id);
    setPlaca(item.placa);
    setColor(item.color || "");
    setCorreoCliente(item.correo);

    // Si marca y tipo son objetos, usa .id, si son string, usa el string
    setMarcaSeleccionada(
      marcas.find((m) => m.id === (item.marca.id || item.marca)) || null
    );
    setTipoVehiculoSeleccionado(
      tiposVehiculo.find((t) => t.id === (item.tipo.id || item.tipo)) || null
    );

    // Para servicios seleccionados
    setServiciosSeleccionados(
      (item.serviciosOriginal || []).map((s) => ({ id: s.id }))
    );

    setOpen(true);
  };

  const cerrarModal = () => {
    setOpen(false);
    setRegistroEditar(null);
    limpiarFormulario();
  };

  return (
    <>
      <MenuPrivate />
      <main id="mainDasboard">
        <section className="px-4">
          <h1 className="text-4xl font-bold mt-4 mb-8 text-center">
            Gestion de Visitas
          </h1>
        </section>

        <section className="flex flex-col items-end px-4 mt-5 mb-5">
          <button
            id="btn-registrar-visita"
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded"
            type="button"
            onClick={() => setOpen(true)}
          >
            Registrar una Visita
          </button>
        </section>

        <section className="flex flex-row items-start px-4 mt-5 mb-5 gap-6">
          <div className="w-full max-w-xs">
            <ControlPanel />
          </div>
          <div id="table" className="flex-1">
            <Modal
              isOpen={open}
              onClose={() => cerrarModal()}
              title="Registro de Vehículos"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                Registro de Vehículos
              </h2>

              <form className="w-full space-y-2">
                <div className="flex gap-2">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium mb-1">
                      Placa
                    </label>
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
                    <label className="block text-sm font-medium mb-1">
                      Marca
                    </label>
                    <select
                      id="marcas"
                      className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
                      value={marcaSeleccionada ? marcaSeleccionada.id : ""}
                      onChange={(e) => {
                        const selected = marcas.find(
                          (m) => m.id === Number(e.target.value)
                        );
                        setMarcaSeleccionada(selected || null);
                      }}
                    >
                      <option value="">Seleccione</option>
                      {marcas.map((marca) => (
                        <option key={marca.id} value={marca.id}>
                          {marca.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium mb-1">
                      Color
                    </label>
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
                    <label className="block text-sm font-medium mb-1">
                      Tipo de Vehiculo
                    </label>
                    <select
                      id="tipo"
                      className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
                      value={
                        tipoVehiculoSeleccionado
                          ? tipoVehiculoSeleccionado.id
                          : ""
                      }
                      onChange={(e) => {
                        const selected = tiposVehiculo.find(
                          (t) => t.id === Number(e.target.value)
                        );
                        setTipoVehiculoSeleccionado(selected || null);
                      }}
                    >
                      <option value="">Seleccione</option>
                      {tiposVehiculo.map((tipo) => (
                        <option key={tipo.id} value={tipo.id}>
                          {tipo.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className=" gap-2">
                  <label className="block text-sm font-medium mb-1">
                    Correo
                  </label>
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
                    <label
                      key={servicio.id}
                      className="flex items-center text-sm"
                    >
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4 text-red-500"
                        value={servicio.id}
                        checked={serviciosSeleccionados.some(
                          (s) => s.id === servicio.id
                        )}
                        onChange={() => handleServicioChange(servicio.id)}
                      />
                      {servicio.name}
                    </label>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Fecha
                  </label>
                  <p lassName="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1">
                    {fechaServicio}
                  </p>
                </div>

                <p className="text-gray-500 text-xs italic text-center">
                  Ingrese todos los datos correctamente
                </p>

                <div className="flex justify-center gap-2 mt-2">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded"
                    type="button"
                    onClick={() => {
                      cerrarModal();
                    }}
                  >
                    Cancelar
                  </button>

                  {registroEditar ? (
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded"
                      type="button"
                      onClick={editarVisita}
                    >
                      Editar
                    </button>
                  ) : (
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Registrar
                    </button>
                  )}
                </div>
              </form>
            </Modal>

            <CompactTable
              columns={COLUMNS}
              data={{ nodes: visitasTabla }}
              theme={theme}
              pagination={pagination}
            />
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="mr-5">
                Total Pages: {pagination.state.getTotalPages(visitasTabla)}
              </span>
              <span>
                Page:{" "}
                {pagination.state.getPages(visitasTabla).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    style={{
                      fontWeight:
                        pagination.state.page === index ? "bold" : "normal",
                    }}
                    onClick={() => pagination.fns.onSetPage(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </span>
            </div>
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

export default FormRegisterVehicles;
