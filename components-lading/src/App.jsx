import Ofertas from "./Components/Ofertas";
import Pagos from "./Components/Pagos";
import Redes from "./Components/Redes";

function removeContainerClass() {
  const homeContent1 = document.getElementById("home-content-5");
  homeContent1.classList.remove("container");
}

removeContainerClass();

function App() {
  return (
    <>
      <div className="main__container_app_components">
        <div className="main__container_app_components__backBlue">
          <Redes />
          <Pagos />
        </div>
        <div className="main__container_app_components____seccion__ofertas">
          <Ofertas />
        </div>
      </div>
    </>
  );
}

export default App;
