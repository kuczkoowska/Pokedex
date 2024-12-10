const pokemonList = ({ pokemons, onSelectPokemon}) => {
    return (
        <section id="pokemon-list">
                <ul id="list">
                    
                    {pokemons.map((pokemon) => {
                        <li onClick = {() => onSelectPokemon(pokemon)}> 
                            <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
                            <p>#{pokemon.id}</p>
                            <p>{pokemon.name}</p>
                        </li>
                    })}
                </ul>
        </section>
    )
}