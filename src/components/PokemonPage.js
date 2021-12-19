import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState(pokemonArray)

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(data => {
      setPokemonArray(data)
      setFilteredArray(data)
    })
  }, []);

  function handleSearch(e) {
    if (e.target.value === '') {
      setFilteredArray(pokemonArray);
    } else {
      setFilteredArray(pokemonArray.filter(pokemon => pokemon.name.startsWith(e.target.value)));
    }
  }

  function handlePost(newPokemon) {
    setFilteredArray([...pokemonArray, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onPost={handlePost} />
      <br />
      <Search onSearchChange={handleSearch} />
      <br />
      <PokemonCollection pokemonArray={filteredArray} />
    </Container>
  );
}

export default PokemonPage;
