import "./Home.css";
import MenuGuest from "../../components/menu/MenuGuest";
import WhoWeAre from "./WhoWeAre";
import OurServices from "./OurServices";
import History from "./History";
import Footer from "../../components/footer/Footer";
import "two-up-element";

function Home() {
  return (
    <>
      <MenuGuest />
      <main id="home">
        <section id="seccionNumeroUno">
          <div>
            <h1>QUICK WASH</h1>
          </div>
        </section>

        <WhoWeAre />
        <OurServices />
        <History />

        <section id="seccionNumeroCinco">
          <div>
            <h2 className="text-4xl text-white font-medium">Contáctanos</h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
