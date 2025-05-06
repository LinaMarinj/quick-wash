import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function FormRegisterVehicles() {
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

  return (
    <section className="flex flex-col items-center px-4">
      <h1 className="text-2xl font-bold mb-4">Registro de Vehículos</h1>

      <form className="w-full max-w-sm space-y-2">
        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Placa</label>
            <input
              required
              type="text"
              name="placa"
              className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Marca</label>
            <select
              id="marcas"
              className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
            >
              <option value="">Seleccione</option>
              <option value="toyota">Toyota</option>
              <option value="nissan">Nissan</option>
              <option value="mazda">Mazda</option>
              <option value="renault">Renault</option>
              <option value="hyundai">Hyundai</option>
              <option value="kia">Kia</option>
              <option value="chevrolet">Chevrolet</option>
              <option value="ford">Ford</option>
              <option value="honda">Honda</option>
              <option value="volkswagen">Volkswagen</option>
              <option value="bmw">BMW</option>
              <option value="mercedes-benz">Mercedes-Benz</option>
              <option value="audi">Audi</option>
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
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Tipo</label>
            <select
              id="marcas"
              className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
            >
              <option value="">Seleccione</option>
              <option value="automovil">Automóvil</option>
              <option value="camioneta">Camioneta</option>
              <option value="pickup">Pickup</option>
              <option value="convertible">Convertible</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>

        <h2 className="text-base text-gray-500 font-semibold mt-2">Cliente</h2>

        <div className="flex gap-2">
          <input
            required
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="w-1/2 border bg-gray-50 border-gray-300 rounded px-2 py-1"
          />
          <input
            required
            type="text"
            name="apellido"
            placeholder="Apellido"
            className="w-1/2 border bg-gray-50 border-gray-300 rounded px-2 py-1"
          />
        </div>

        <div className="flex gap-2">
          <input
            required
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            className="w-1/2 border bg-gray-50 border-gray-300 rounded px-2 py-1"
          />
          <input
            required
            type="email"
            name="correo"
            placeholder="Correo"
            className="w-1/2 border bg-gray-50 border-gray-300 rounded px-2 py-1"
          />
        </div>

        <h2 className="text-base text-gray-500 font-semibold mt-2">
          Servicios
        </h2>

        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          {[
            "Lavado sencillo",
            "Lavado de chasis",
            "Lavado full",
            "Brillada",
            "Lavado de motor",
          ].map((servicio, idx) => (
            <label key={idx} className="flex items-center text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-red-500" />
              {servicio}
            </label>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Fecha</label>
          <input
            type="date"
            className="w-full border bg-gray-50 border-gray-300 rounded px-2 py-1"
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
            type="button"
            onClick={registroVehiculoExitoso}
          >
            Registrar
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormRegisterVehicles;
