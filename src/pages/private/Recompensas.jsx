import "./Recompensas.css";
import MenuPrivate from "../../components/menu/MenuPrivate";
import ControlPanel from "../../components/aside/ControlPanel";
import QuestionImg from "../../assets/img/icons/question.png";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

function Recompensas() {
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
          element: "#recompensas",
          popover: {
            title: "Tabla de recompensas",
            description:
              "En este espacio encontrarás toda la información relacionada con las recompensas.",
            side: "bottom",
            align: "start",
          },
        },
        {
          popover: {
            title: "¡Excelente!",
            description: "Ya tienes más detalles de las recompesas.",
          },
        },
      ],
    });

  return (
    <>
      <MenuPrivate />

      <main id="mainDasboard">
        <section className="grid grid-cols-4 gap-4">
          <ControlPanel />

          <div id="recompensas" className="recompensas-container col-span-3">
            <header className="mb-6">
              <h1 className="flex justify-center text-4xl font-bold text-gray-900">
                Recompensas Quick Wash
              </h1>
            </header>

            <section className="recompensas-list">
              <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full bg-white border-gray-200 shadow-md">
                  <thead className="bg-red-600 text-white">
                    <tr>
                      <th className="py-2 px-4 text-left">Foto</th>
                      <th className="py-2 px-4 text-left">Nombre</th>
                      <th className="py-2 px-4 text-left">Descripción</th>
                      <th className="py-2 px-4 text-left">
                        Cantidad de Visitas
                      </th>
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
                      <td className="py-2 px-4">10 visitas</td>
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
                      <td className="py-2 px-4">20 visitas</td>
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

export default Recompensas;
