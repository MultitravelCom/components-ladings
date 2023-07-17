import React, { useEffect, useState } from "react";
import "./style.css";

function ButtonTresSecciones(props) {
  const [buttonText, setButtonText] = useState(props.text);

  const handleClick = (event) => {
    event.preventDefault();
    window.open(props.link, '_blank');
  };

  const updateButtonText = () => {
    if (props.mobileText && window.innerWidth <= 768) {
      setButtonText(props.mobileText);
    } else {
      setButtonText(props.text);
    }
  };

  useEffect(() => {
    updateButtonText();
    window.addEventListener("resize", updateButtonText);

    return () => {
      window.removeEventListener("resize", updateButtonText);
    };
  }, []);

  return (
    <button id={props.id} className={props.style} onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default ButtonTresSecciones;
