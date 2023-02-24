import React from "react";

import "./styles/Rotate.css";
export const Rotate = (props) => {
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
          {...(props.pokemon.sprites &&
            props.pokemon.sprites.front_default && {
              src: props.pokemon.sprites.other.home.front_default,
            })}
        />
      </div>
    </div>
  );
};
