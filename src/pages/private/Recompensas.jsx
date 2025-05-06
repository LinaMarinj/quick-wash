import "./Recompensas.css"; // Si necesitas aplicar algún estilo
import MenuPrivate from "../../components/menu/MenuPrivate";
import ControlPanel from "../../components/aside/ControlPanel";

function Recompensas() {
  return (
    <>
      <MenuPrivate />

      <section className="grid grid-cols-4 grid-rows-3 gap-4">
        <ControlPanel />

        <div className="recompensas-container col-span-3">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Recompensas Quick Wash
            </h1>
            <p className="text-gray-700">
              ¡Explora las recompensas disponibles para ti!
            </p>
          </header>

          <section className="recompensas-list">
            <h2 className="text-xl font-semibold mb-4">
              Listado de Recompensas
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-red-600 text-white">
                  <tr>
                    <th className="py-2 px-4 text-left">Foto</th>
                    <th className="py-2 px-4 text-left">Nombre</th>
                    <th className="py-2 px-4 text-left">Descripción</th>
                    <th className="py-2 px-4 text-left">Cantidad de Visitas</th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr className="border-t">
                    <td className="py-2 px-4">
                      <img
                        src="/bono.png"
                        alt="10% Descuento"
                        className="h-16 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 font-semibold">10% Descuento</td>
                    <td className="py-2 px-4">En tu próximo lavado</td>
                    <td className="py-2 px-4">5 visitas</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">
                      <img
                        src="/ambientador.webp"
                        alt="ambientador para carro"
                        className="h-16 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 font-semibold">
                      Ambientador para carro
                    </td>
                    <td className="py-2 px-4">
                      Con nuestro logo personalizado
                    </td>
                    <td className="py-2 px-4">8 visitas</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">
                      <img
                        src="/shampoo.webp"
                        alt="Shampoo"
                        className="h-16 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 font-semibold">Shampoo</td>
                    <td className="py-2 px-4">Obsequio exclusivo</td>
                    <td className="py-2 px-4">15 visitas</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">
                      <img
                        src="/externo.webp"
                        alt="Lavado Gratis"
                        className="h-16 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 font-semibold">Lavado Gratis</td>
                    <td className="py-2 px-4">externo</td>
                    <td className="py-2 px-4">12 visitas</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">
                      <img
                        src="/polichar.webp"
                        alt="Polichada"
                        className="h-16 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 font-semibold">Polichada</td>
                    <td className="py-2 px-4">Completamente gratuita</td>
                    <td className="py-2 px-4">25 visitas</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">
                      <img
                        src="brillar.webp"
                        alt="Brillada"
                        className="h-16 rounded"
                      />
                    </td>
                    <td className="py-2 px-4 font-semibold">Brillada</td>
                    <td className="py-2 px-4">Completamente gratuita</td>
                    <td className="py-2 px-4">30 visitas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Recompensas;
