export default function PokemonList({ pokemons, onSelect }) {
  function handlePokemonClick(pokemon) {
    onSelect(pokemon);
  }
  return (
    <section id="pokemon-list">
      <ul id="list">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id} onClick={() => handlePokemonClick(pokemon)}>
              <img
                src={pokemon.sprites.other.showdown.front_default}
                alt={pokemon.name}
              />
              <p>#{pokemon.id}</p>
              <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
