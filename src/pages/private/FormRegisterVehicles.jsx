import Swal from "sweetalert2";

function FormRegisterVehicles() {
  return (
    <section className="flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-12">Registro de Vehículos</h1>

      <form className="w-full max-w-md space-y-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Placa</label>
            <input
              required
              type="text"
              name="placa"
              className="w-full border  bg-gray-50 border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="marcas" className="block text-sm font-medium mb-1">
              Marca
            </label>
            <select
              id="marcas"
              className="w-full border  bg-gray-50 border-gray-300 rounded px-3 py-2"
            >
              <option value="">Seleccione una marca</option>
              <option value="toyota">Toyota</option>
              <option value="nissan">Nissan</option>
              <option value="mazda">Mazda</option>
              <option value="audi">Renault</option>
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

        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            <input
              required
              type="text"
              name="color"
              className="w-full border bg-gray-50 border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">
              Tipo de vehículo
            </label>
            <input
              required
              type="text"
              name="modelo"
              className="w-full border bg-gray-50 border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <h2 className="text-xl text-gray-500 font-semibold mb-3 mt-5 block">
          Cliente
        </h2>

        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              required
              type="text"
              name="nombre"
              className="w-full border bg-gray-50 border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Apellido</label>
            <input
              required
              type="text"
              name="apellido"
              className="w-full border bg-gray-50 border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Teléfono</label>
            <input
              required
              type="tel"
              name="telefono"
              className="w-full border bg-gray-50 border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Correo</label>
            <input
              required
              type="email"
              name="correo"
              className="w-full border bg-gray-50 border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <h2 className="text-xl text-gray-500 font-semibold mb-3 mt-5 block">
          Servicios
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="lavado-sencillo"
              className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <label htmlFor="lavado-sencillo" className="ml-2 text-gray-700">
              Lavado sencillo
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="lavado-chasis"
              className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <label htmlFor="lavado-chasis" className="ml-2 text-gray-700">
              Lavado de chasis
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="lavado-full"
              className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <label htmlFor="lavado-full" className="ml-2 text-gray-700">
              Lavado full
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="brillada"
              className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <label htmlFor="brillada" className="ml-2 text-gray-700">
              Brillada
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="lavado-motor"
              className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <label htmlFor="lavado-motor" className="ml-2 text-gray-700">
              Lavado de motor
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="fecha"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Fecha:
          </label>
          <input
            type="date"
            id="fecha"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <p className="text-gray-500 text-sm italic mb-4 text-center">
          Ingrese todos los datos de manera correcta
        </p>
        <div className="flex justify-center ">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            type="button"
          >
            Cancelar
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Registrar
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormRegisterVehicles;
