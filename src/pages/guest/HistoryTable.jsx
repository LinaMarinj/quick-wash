function HistoryTable() {
  return (
    <section>
      <div className="container">
        <table className="hidden">
          <thead>
            <tr>
              <th>Placa</th>
              <th>Servicio realizado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KPS123</td>
              <td>Lavado sencillo</td>
              <td>2021-08-01</td>
            </tr>
            <tr>
              <td>KPS123</td>
              <td>Lavado y encerado</td>
              <td>2021-08-15</td>
            </tr>
            <tr>
              <td>KPS123</td>
              <td>Lavado sencillo</td>
              <td>2021-08-30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default HistoryTable;
