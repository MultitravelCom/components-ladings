import React, { useEffect, useState, useRef } from "react";
import "./style.css";

function ButtonTresSecciones(props) {
  // const [buttonText, setButtonText] = useState(props.text);
  // const clickInProgressRef = useRef(false);

  // const handleClickTresSecciones = (event) => {
  //   // event.preventDefault();

  //   if (!clickInProgressRef.current) {
  //     clickInProgressRef.current = true;
  //     window.open(props.link, "_blank");
  //   }
  // };

  // const updateButtonText = () => {
  //   if (props.mobileText && window.innerWidth <= 768) {
  //     setButtonText(props.mobileText);
  //   } else {
  //     setButtonText(props.text);
  //   }
  // };

  // useEffect(() => {
  //   updateButtonText();
  //   window.addEventListener("resize", updateButtonText);

  //   return () => {
  //     window.removeEventListener("resize", updateButtonText);
  //   };
  // }, []);

  // useEffect(() => {
  //   const resetClickInProgress = () => {
  //     clickInProgressRef.current = false;
  //   };

  //   window.addEventListener("beforeunload", resetClickInProgress);
  //   return () => {
  //     window.removeEventListener("beforeunload", resetClickInProgress);
  //   };
  // }, []);

  return (
    <button
      id={props.id}
      className={props.style}
      onClick={handleClickTresSecciones}
    >
      {buttonText}
    </button>
  );
}

export default ButtonTresSecciones;
