import "./styles/PokemonEvolution.css";

export const PokemonEvolution = (props) => {
  // console.log("test", props.preEvolution);
  return (
    <div className="pokemon__evolution__container">
      <div className="pokemon__evolution__content">
        <h3 className="pokemon__evolution__text">evo</h3>
        <div className="pokemon__evolution__image">
          <img src="../../assets/images/icon.png" alt="evolution" />
        </div>
      </div>
    </div>
  );
};
