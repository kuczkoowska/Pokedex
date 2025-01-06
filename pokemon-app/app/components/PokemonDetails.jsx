export default function PokemonDetails({ pokemon }) {
  const getPokemonTypeColor = (type) => {
    const colours = {
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD",
    };

    return colours[type] || colours["normal"];
  };

  const PokemonTypeBadge = ({ type }) => {
    const color = getPokemonTypeColor(type);

    return (
      <span
        style={{
          backgroundColor: color,
          color: "#fff",
          padding: "10px",
          borderRadius: "20px",
          marginRight: "5px",
        }}
      >
        {type}
      </span>
    );
  };

  return (
    <section id="pokemon-details">
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <p className="id">#{pokemon.id}</p>
      <h2>{pokemon.name}</h2>
      <ul className="types">
        {pokemon.types.map((typeInfo) => (
          <li key={typeInfo.type.name}>
            <PokemonTypeBadge type={typeInfo.type.name} />
          </li>
        ))}
      </ul>
      <h3>Abilities</h3>
      <ul className="abilities">
        {pokemon.abilities.map((abilityInfo) => (
          <li key={abilityInfo.ability.name}>{abilityInfo.ability.name}</li>
        ))}
      </ul>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
      <h3>Stats</h3>
      <ul className="stats">
        {pokemon.stats.map((statInfo) => (
          <li key={statInfo.stat.name}>
            {statInfo.stat.name}: {statInfo.base_stat}
          </li>
        ))}
      </ul>
    </section>
  );
}
