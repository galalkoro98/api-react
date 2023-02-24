import "./styles/PokemonMovies.css";

export const PokemonMovies = (props) => {
  return (
    <div className="pokemon__movies__container">
      <div className="pokemon__movies__content">
        <h2 className="pokemon__movies__title">Movies</h2>
        <div className="pokemon__movies__list__container">
          {props.pokemon.game_indices &&
            props.pokemon.game_indices.length > 0 && (
              <ul className="pokemon__movies__list">
                {props.pokemon.game_indices.map((game, index) => {
                  if (index > 3) {
                    return null;
                  }
                  return (
                    <li className="movies__list" key={game.version.name}>
                      {game.version.name}
                    </li>
                  );
                })}
              </ul>
            )}
        </div>
      </div>
    </div>
  );
};
