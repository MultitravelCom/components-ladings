import React from 'react'
import "./style.css";
import Button  from '../Button/index.jsx';

function Boxs({text_h2_pagos, text_p_pagos,text_position, position_img, boxs_pagos_img, btn_position}) {
  return (
    <div className='main__container__boxs__pagos'>
        <div className={`main__container__boxs__pagos__text ${text_position}`}>
            <h2>{text_h2_pagos}</h2>
            <p>{text_p_pagos}</p>
        </div>
        <div className={`main__container__boxs__pagos__img ${position_img}`}>
            <img src={boxs_pagos_img}></img>
        </div>
        <Button style={`btn btnStylePagos ${btn_position}`} link="https://www.multitravel.com/venta-personalizada/argentina" text="Descubrir" />
    </div>
  )
}

export default Boxs