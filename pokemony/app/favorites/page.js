import React from "react";

export default function FavoritesPage() {
  return (
    <>
      <ul className="list">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <img
              src={pokemon.sprites.other.showdown.front_default}
              alt={pokemon.name}
            />
            <p>#{pokemon.id}</p>
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    sprites: {
      other: {
        showdown: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        },
      },
    },
  },
  {
    id: 2,
    name: "Ivysaur",
    sprites: {
      other: {
        showdown: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        },
      },
    },
  },
  {
    id: 3,
    name: "Venusaur",
    sprites: {
      other: {
        showdown: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        },
      },
    },
  },
  {
    id: 4,
    name: "Bulbasaur",
    sprites: {
      other: {
        showdown: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        },
      },
    },
  },
  {
    id: 5,
    name: "Ivysaur",
    sprites: {
      other: {
        showdown: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        },
      },
    },
  },
  {
    id: 6,
    name: "Venusaur",
    sprites: {
      other: {
        showdown: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        },
      },
    },
  },
  {
    id: 7,
    name: "Bulbasaur",
    sprites: {
      other: {
        showdown: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        },
      },
    },
  },
  {
    id: 8,
    name: "Ivysaur",
    sprites: {
      other: {
        showdown: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        },
      },
    },
  },
  {
    id: 9,
    name: "Venusaur",
    sprites: {
      other: {
        showdown: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        },
      },
    },
  },
];
