import React from "react";

const favoritePokemons = [
    { id: 1, name: "Bulbasaur", sprites: { front_default: "/images/bulbasaur.png" } },
    { id: 2, name: "Pikachu", sprites: { front_default: "/images/pikachu.png" } },
    { id: 3, name: "Charmander", sprites: { front_default: "/images/charmander.png" } }
];

export default function FavoritesPage() {
    return (
            <ul>
                {favoritePokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                    </li>
                ))}
            </ul>
    );
}
