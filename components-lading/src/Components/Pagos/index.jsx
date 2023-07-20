import React from "react";
import Boxs from "./Boxs";

function Pagos() {
  return (
    <div className="main__container_pagos_boxes">
      <Boxs
        text_h2_pagos="Vos decidís"
        text_p_pagos="Encontrá todos los medios de pagos exclusivos para vos"
        position_img="boxs_right"
        btn_position="btnStylePagos__left"
        boxs_pagos_img="https://multitravelcom.github.io/components-ladings/img/MedisodePago-Desktop.png"
        boxs_pagos_img_mobile="https://multitravelcom.github.io/components-ladings/img/MedisodePago-Mobile.png"
        text_position="text_position__left"
      />
      <Boxs
        text_h2_pagos="Quienes somos"
        text_p_pagos="Vení a descubrir el MultiTeam pa"
        position_img="boxs_left"
        btn_position="btnStylePagos__right"
        boxs_pagos_img="https://multitravelcom.github.io/components-ladings/img/MedisodePago-Desktop2.png"
        boxs_pagos_img_mobile="https://multitravelcom.github.io/components-ladings/img/MedisodePago-Mobile2.png"
        text_position="text_position__right"
      />
    </div>
  );
}

export default Pagos;
