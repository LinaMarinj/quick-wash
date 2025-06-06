import HistoryTable from "./HistoryTable";

function History() {
  return (
    <>
      <section id="historico">
        <div>
          <img src="/car.png" />
          <section className="container">
            <div>
              <h1 id="titulo">¡EN QUICK WASH, PREMIAMOS TU FIDELIDAD!</h1>
              <p className="text-2xl m-5">
                Revisa cuántas veces has venido y en tu próxima visita pregunta
                en caja por tus beneficios
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
