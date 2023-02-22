import { PokemonAbilities } from "./PokemonAbilities";
import { PokemonMovies } from "./PokemonMovies";
import { PokemonEvolutionChain } from "./PokemonEvolutionChain";

import "./styles/Article.css";

export const Article = () => {
  return (
    <article className="pokemon__article">
      <div className="pokemon__article__container">
        <PokemonAbilities />
        <PokemonMovies />
        <PokemonEvolutionChain />
      </div>
    </article>
  );
};
