import "./styles/PokemonID.css";

export const PokemonID = (props) => {
  return (
    <div className="pokemon__id__container">
      {props.pokemon && (
        <span className="pokemon__id">#{props.pokemon.id}</span>
      )}
    </div>
  );
};
