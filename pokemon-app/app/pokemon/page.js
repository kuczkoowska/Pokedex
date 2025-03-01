"use client"

import PokemonList from "../components/PokemonList.jsx";
import PokemonDetails from "../components/PokemonDetails.jsx";
import { useState, useEffect } from "react";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        const data = await response.json();

        const pokemonPromises = data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        });

        const allPokemonDetails = await Promise.all(pokemonPromises);

        setPokemonList(allPokemonDetails);
        setDisplayedPokemon(allPokemonDetails.slice(0, 20));
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching Pokémon data:", err);
        setIsLoading(false);
      }
    }
    fetchPokemonData();
  }, []);

  function handleChange(event) {
    const value = event.target.value.toLowerCase();

    if (!value) {
      setDisplayedPokemon(pokemonList.slice(0, 20));
    } else {
      const filteredPokemon = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value)
      );
      setDisplayedPokemon(filteredPokemon.slice(0, 20));
    }
  }

  function handleSelect(pokemon) {
    setSelectedPokemon(pokemon);
  }

  return (
    <main>
      <div>
        {isLoading ? (
          <div className="loading-overlay">
            <span>Loading Pokémon...</span>
          </div>
        ) : (
          <>
            <section id="search-bar">
              <input
                type="search"
                id="search"
                placeholder="Search for a Pokemon"
                onChange={handleChange}
              />
            </section>

            <PokemonList pokemons={displayedPokemon} onSelect={handleSelect} />
            {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
          </>
        )
        }
      </div>
    </main>
  );
}