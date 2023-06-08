import React from "react";
import Secciones from "./secciones";
import "./style.css";

function Ofertas() {
  const path = window.location.pathname;

  if (path === "/flights/") {
    return (
      <>
        <Secciones
          boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-alojamiento.webp"
          boxs_ofertas_text="Alojamiento"
          btn_link="https://www.multitravel.com/hotels/"
        />
         <Secciones
          boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-paquetes.webp"
          boxs_ofertas_text="Paquetes"
        />
        <Secciones
          boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-alojamiento.webp"
          boxs_ofertas_text="Asistencias"
        />
      </>
    );
  } else if (path === "/hotels/") {
    return (
      <>
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
      </>
    );
  } else if (path === "/packages/flighthotel/") {
    return (
      <>
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
      </>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
}

export default Ofertas;
