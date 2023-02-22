import React from "react";

import "./styles/Rotate.css";
export const Rotate = () => {
  return (
    <div className="pokemon__rotate__container">
      <div className="pokemon__rotate__content">
        <img
          className="pokemon__rotate__background__image"
          src="../../assets/images/background.png"
          alt="background "
        />
        <img
          className="pokemon__rotate__evolution__image"
          src="../../assets/images/evolution.png"
          alt="evolution img"
        />
      </div>
    </div>
  );
};
