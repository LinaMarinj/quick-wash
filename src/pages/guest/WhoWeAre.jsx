function WhoWeAre() {
  return (
    <section id="seccionNumeroDos">
      <div>
        <h3>¿Quienes somos?</h3>

        <p>
          Somos un equipo dedicado a ofrecerte un servicio rápido y eficiente
          para que tu vehículo siempre luzca impecable. Con nuestra experiencia
          y atención al detalle, garantizamos que tu auto reciba el mejor
          cuidado y protección. En cada visita, dejamos tu carro como nuevo,
          asegurando una apariencia brillante y duradera.
        </p>
      </div>

      <div>
        <article>
          <two-up className="my-two-up">
            <div>
              <img className="fotocarro" src="/rojoSucio.webp" alt="" />
            </div>
            <div>
              <img className="fotocarro" src="/rojoLimpio.webp" alt="" />
            </div>
          </two-up>
        </article>
      </div>
    </section>
  );
}

export default WhoWeAre;
