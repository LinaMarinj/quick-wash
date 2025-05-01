function OurServices() {
  return (
    <div id="tres" className="fondoSeccionTres">
      <h2 className="text-4xl text-white font-medium">Nuestros Servicios</h2>
      <br />
      <br />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="#" className="group">
            <img
              src="/externo.webp"
              alt=""
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
            <h3 className="mt-4 text-lg font-medium text-white">
              Lavado externo
            </h3>
            <p className="mt-1 text-lg text-white">$50.000</p>
          </a>
          <a href="#" className="group">
            <img
              src="/interno.webp"
              alt=""
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
            <h3 className="mt-4 text-lg font-medium text-white">
              Lavado interno
            </h3>
            <p className="mt-1 text-lg text-white">$70.000</p>
          </a>
          <a href="#" className="group">
            <img
              src="/brillar.webp"
              alt=""
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
            <h3 className="mt-4 text-lg font-medium text-white">Brillado</h3>
            <p className="mt-1 text-lg text-white">$150.000</p>
          </a>
          <a href="#" className="group">
            <img
              src="/polichar.webp"
              alt=""
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
            <h3 className="mt-4 text-lg font-medium text-white">Polichado</h3>
            <p className="mt-1 text-lg text-white">$150.000</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
