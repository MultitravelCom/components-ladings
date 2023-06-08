import React from "react";
import Button from "../Button";
import "./style.css";

function Secciones({ boxs_ofertas_img, boxs_ofertas_text, btn_link }) {
  return (
    <div className="main__container__ofertas__secciones">
      <div className="main__container__ofertas__secciones__img">
        <img src={boxs_ofertas_img}></img>
      </div>
      <div className="main__container__ofertas__secciones__text">
        <p>{boxs_ofertas_text}</p>
      </div>
      <Button
        style="btn btnStyleOfertas"
        link={btn_link}
        text="Ver más"
      />
    </div>
  );
}

export default Secciones;
