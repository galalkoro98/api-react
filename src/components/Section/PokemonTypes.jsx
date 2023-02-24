import "./styles/PokemonTypes.css";

export const PokemonTypes = (props) => {
  return (
    <div className="pokemon__types__container">
      <div className="pokemon__types__content">
        <h2 className="pokemon__types__text">Types:</h2>
        <div className="pokemon__type__list__container">
          <ul className="pokemon__type__list__item">
            {props.pokemon.types &&
              props.pokemon.types.map((type) => {
                return (
                  <li key={type.type.name} className="type__list">
                    {type.type.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
