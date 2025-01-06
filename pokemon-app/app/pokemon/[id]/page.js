"use client";

import React from "react";
import { useState, useEffect } from "react";
import PokemonDetails from "../../components/PokemonDetails.jsx";

export default function PokemonDetailPage({ params }) {
  const { id } = React.use(params);
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
        setIsLoading(false);
      }
    }

    fetchPokemonDetails();
  }, [id]);

  return (
    <main>
      {pokemon && <PokemonDetails pokemon={pokemon} />}
    </main>
  );
}
