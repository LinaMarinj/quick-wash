import HistoryTable from "./HistoryTable";

function History() {
  return (
    <>
      <section id="historico">
        <div>
          <img src="/car.png" />
          <section className="container">
            <div>
              <h1 id="titulo">¡TU RECOMPENSA ESTÁ CERCA!</h1>
              <p>
                Consulta y descubre cuántas visitas te faltan para tu recompensa
              </p>

              <form id="form">
                <label for="placa">* Placa</label>
                <input type="text" id="placa" placeholder="KPS123" required />
                <button type="button" id="btn">
                  Consultar
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
      <HistoryTable />
    </>
  );
}

export default History;
