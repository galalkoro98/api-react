import "./styles/section.css";

import { PokemonTypes } from "./PokemonTypes";
import { PokemonID } from "./PokemonID";
import { PokemonName } from "./PokemonName";
import { PokemonEvolution } from "./PokemonEvolution";
import { Rotate } from "./Rotate";
import { Article } from "./Article";

export const Section = (props) => {
  return (
    <section className="pokemon__section">
      <div className="pokemon__types__and__evolution__container">
        <div className="pokemon__types__and__evolution__content">
          <PokemonTypes pokemon={props.pokemon} />
          <PokemonEvolution />
        </div>
      </div>
      <div className="pokemon__id__and__name__container">
        <div className="pokemon__id__and__name__content">
          <PokemonID pokemon={props.pokemon} />
          <PokemonName pokemon={props.pokemon} />
        </div>
        <Rotate pokemon={props.pokemon} />
      </div>
      <Article pokemon={props.pokemon} evolutionChain={props.evolutionChain} />
    </section>
  );
};
