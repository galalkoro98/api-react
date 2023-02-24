import { PokemonAbilities } from "./PokemonAbilities";
import { PokemonMovies } from "./PokemonMovies";
import { PokemonEvolutionChain } from "./PokemonEvolutionChain";

import "./styles/Article.css";

export const Article = (props) => {
  return (
    <article className="pokemon__article">
      <div className="pokemon__article__container">
        <PokemonAbilities pokemon={props.pokemon} />
        <PokemonMovies pokemon={props.pokemon} />
        <PokemonEvolutionChain evolutionChain={props.evolutionChain} />
      </div>
    </article>
  );
};
