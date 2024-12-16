const PokemonList = ({ pokemons, onSelect }) => {
    return (
        <section id="pokemon-list">
            <ul id="list">
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id} onClick={() => onSelect(pokemon)}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <p>#{pokemon.id}</p>
                        <p>{pokemon.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
