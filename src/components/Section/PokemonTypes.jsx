import "./styles/PokemonTypes.css";

export const PokemonTypes = () => {
  return (
    <div className="pokemon__types__container">
      <div className="pokemon__types__content">
        <h2 className="pokemon__types__text">Types:</h2>
        <div className="pokemon__type__list__container">
          <ul className="pokemon__type__list__item">
            <li className="pokemon__type__list__item__text">type1</li>
            <li className="pokemon__type__list__item__text">type2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
