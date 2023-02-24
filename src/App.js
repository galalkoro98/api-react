import "./styles/App.css";
import { useState } from "react";

import { Header } from "./components/Header/Header";
import { Section } from "./components/Section";
import { Form } from "./components/Form/Form";

export const App = () => {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [evolutionChain, setEvolutionChain] = useState({});

  const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await response.json();
    setPokemon(data);

    const speciesResponse = await fetch(data.species.url);
    const speciesData = await speciesResponse.json();

    const evolutionChainResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionChainData = await evolutionChainResponse.json();

    // console.log("test", evolutionChainData);

    setEvolutionChain(evolutionChainData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Section pokemon={pokemon} evolutionChain={evolutionChain} />
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          input={input}
        />
      </main>
    </>
  );
};
