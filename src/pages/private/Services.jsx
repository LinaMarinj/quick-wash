import MenuPrivate from "../../components/menu/MenuPrivate";
import OurServices from "../guest/OurServices";

function Services() {
  return (
    <>
      <MenuPrivate />
      <p class="bg-red-600 text-black font-semibold text-base p-4 mt-10 rounded-lg shadow-md leading-relaxed">
        ¡Bienvenido, Administrador! Estos son los servicios que actualmente
        prestamos en <span class="font-bold">Quick Wash</span>. 🛠️ Muy pronto
        podrás editar, agregar o eliminar servicios directamente desde esta
        página.
      </p>

      <OurServices />
    </>
  );
}

export default Services;
