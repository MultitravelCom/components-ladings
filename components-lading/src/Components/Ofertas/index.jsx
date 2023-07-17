import React from "react";
import Secciones from "./secciones";
import "./style.css";

function Ofertas() {
  const path = window.location.pathname;

  if (path === "/flights/") {
    return (
      <>
        <div className="main__container_secciones">
          <Secciones
            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-alojamiento.webp"
            boxs_ofertas_text="Alojamiento"
            btn_link="https://www.multitravel.com/hotels/"
          />
          <Secciones
            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-paquetes.webp"
            boxs_ofertas_text="Paquetes"
            btn_link="https://www.multitravel.com/insurances/"
          />
          <Secciones
            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-alojamiento.webp"
            boxs_ofertas_text="Asistencias"
          />
        </div>
      </>
    );
  } else if (path === "/hotels/") {
    return (
      <>
        <div className="main__container_secciones">
          <Secciones
            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-paquetes.webp"
            boxs_ofertas_text="Paquetes"
            btn_link="https://www.multitravel.com/packages/flighthotel/"
          />
          <Secciones
            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-vuelo.webp"
            boxs_ofertas_text="Vuelos"
            btn_link="https://www.multitravel.com/flights/"
          />
          <Secciones
            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-alojamiento.webp"
            boxs_ofertas_text="Asistencias"
            btn_link="https://www.multitravel.com/insurances/"
          />
        </div>
      </>
    );
  } else if (path === "/packages/flighthotel/") {
    return (
      <>
        <div className="main__container_secciones">
          <Secciones
            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-alojamiento.webp"
            boxs_ofertas_text="Alojamiento"
            btn_link="https://www.multitravel.com/hotels/"
          />
          <Secciones
            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-vuelo.webp"
            boxs_ofertas_text="Vuelos"
            btn_link="https://www.multitravel.com/flights/"
          />
          <Secciones
            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-alojamiento.webp"
            boxs_ofertas_text="Asistencias"
            btn_link="https://www.multitravel.com/insurances/"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="main__container_secciones">
          <h2 className="main__container_app_components__ofertas__h2 container">
            Más ofertas en Multitravel.com
          </h2>
          <div className="main__container_app_components__ofertas__">
            <Secciones
              boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-alojamiento.webp"
              boxs_ofertas_text="Alojamiento"
              btn_link="https://www.multitravel.com/hotels/"
            />
            <Secciones
              boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-vuelo.webp"
              boxs_ofertas_text="Vuelos"
              btn_link="https://www.multitravel.com/flights/"
            />
            <Secciones
              boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-paquetes.webp"
              boxs_ofertas_text="Paquetes"
              btn_link="https://www.multitravel.com/packages/flighthotel/"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Ofertas;
