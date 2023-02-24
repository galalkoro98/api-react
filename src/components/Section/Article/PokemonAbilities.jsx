import "./styles/PokemonAbilities.css";

export const PokemonAbilities = (props) => {
  return (
    <div className="pokemon__abilities__container">
      <div className="pokemon__abilities__content">
        <h2 className="pokemon__abilities__title">Abilities</h2>
        <div className="pokemon__abilities__list__container">
          <ul className="pokemon__abilities__list">
            {props.pokemon.abilities &&
              props.pokemon.abilities.map((ability) => {
                return (
                  <li key={ability.ability.name} className="ability__list">
                    {ability.ability.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
