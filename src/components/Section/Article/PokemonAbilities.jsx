import "./styles/PokemonAbilities.css";

export const PokemonAbilities = () => {
  return (
    <div className="pokemon__abilities__container">
      <div className="pokemon__abilities__content">
        <h2 className="pokemon__abilities__title">Abilities</h2>
        <div className="pokemon__abilities__list__container">
          <ul className="pokemon__abilities__list"></ul>
        </div>
      </div>
    </div>
  );
};
