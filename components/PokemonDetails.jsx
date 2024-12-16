const PokemonDetails = ({ pokemon }) => {
    return (
        <section id="pokemon-detail">
            <img src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} />
            <p className='id'>#{pokemon.id}</p>
            <h2>{pokemon.name}</h2>
            <ul className='types'>
                {pokemon.types.map(typeInfo => (
                    <li key={typeInfo.type.name}>
                        <PokemonTypeBadge type={typeInfo.type.name} />
                    </li>
                ))}
            </ul>
            <h3>Abilities</h3>
            <ul className='abilities'>
                {pokemon.abilities.map(abilityInfo => <li key={abilityInfo.ability.name}>{abilityInfo.ability.name}</li>)}
            </ul>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Base Experience: {pokemon.base_experience}</p>
            <h3>Stats</h3>
            <ul className='stats'>
                {pokemon.stats.map(statInfo => <li key={statInfo.stat.name}>{statInfo.stat.name}: {statInfo.base_stat}</li>)}
            </ul>
        </section>
    );
};