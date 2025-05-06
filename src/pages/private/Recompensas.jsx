import "./Recompensas.css"; // Si necesitas aplicar algún estilo
import MenuPrivate from "../../components/menu/MenuPrivate";
import ControlPanel from "../../components/aside/ControlPanel";

function Recompensas() {
  return (
    <>
      <MenuPrivate />

      <section className="grid grid-cols-4 grid-rows-3 gap-4">

        <ControlPanel />
        
        <div className="recompensas-container">
          <header>
            <h1>Recompensas Quick Wash</h1>
            <p>¡Explora las recompensas disponibles para ti!</p>
          </header>

          <section className="recompensas-list">
            <h2>Listado de Recompensas</h2>
            <ul>
              <li>Recompensa 1: 10% de descuento en tu siguiente lavado</li>
              <li>Recompensa 2: Lavado gratuito después de 5 visitas</li>
              <li>Recompensa 3: Polichada gratuita</li>
              <li>Recompensa 4: Te regalamos un shampoo</li>
              <li>Recompensa 5: Brillada gratuita</li>
              <li>
                Recompensa 6: Te regalamos una caja de herramientas con nuestro
                logo
              </li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}

export default Recompensas;
