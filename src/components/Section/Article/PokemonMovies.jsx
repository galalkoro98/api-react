import "./styles/PokemonMovies.css";

export const PokemonMovies = () => {
  return (
    <div className="pokemon__movies__container">
      <div className="pokemon__movies__content">
        <h2 className="pokemon__movies__title">Movies</h2>
        <div className="pokemon__movies__list__container">
          <ul className="pokemon__movies__list"></ul>
        </div>
      </div>
    </div>
  );
};
