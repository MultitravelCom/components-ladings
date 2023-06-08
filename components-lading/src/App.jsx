import "./App.css";
import Ofertas from "./Components/Ofertas";
import Pagos from "./Components/Pagos";
import Redes from "./Components/Redes";

function App() {
  return (
    <>
      <div className="main__container_app_components">
        <Redes />
        <Pagos />
      </div>
      <div className="main__container__app_ofertas">
        <h2>Más ofertas en Multitravel.com</h2>
        <Ofertas />
      </div>
    </>
  );
}


export default App;
