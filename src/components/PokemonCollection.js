import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonArray }) {
  const pokemonToBeDisplayed = pokemonArray.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonToBeDisplayed}
    </Card.Group>
  );
}

export default PokemonCollection;
