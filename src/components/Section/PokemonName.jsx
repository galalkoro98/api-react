import "./styles/PokemonName.css";

export const PokemonName = (props) => {
  return (
    <div className="pokemon__name__container">
      {props.pokemon && (
        <h2 className="pokemon__name__text">{props.pokemon.name}</h2>
      )}
    </div>
  );
};
