import Ofertas from "./Components/Ofertas";
import Pagos from "./Components/Pagos";
import Redes from "./Components/Redes";

function App() {
  return (
    <>
      <div className="main__container_app_components">
        <div className="main__container_app_components__backBlue">
          <Redes />
          <Pagos />
        </div>
        <div>
          <h2>Más ofertas en Multitravel.com</h2>
        </div>
        <Ofertas />
      </div>
    </>
  );
}


export default App;
