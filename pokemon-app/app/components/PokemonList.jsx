import Link from "next/link";

export default function PokemonList({ pokemons }) {
  return (
    <section id="pokemon-list">
      <ul id="list">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <img
                src={pokemon.sprites.other.showdown.front_default}
                alt={pokemon.name}
              />
              <p>#{pokemon.id}</p>
              <p>{pokemon.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
