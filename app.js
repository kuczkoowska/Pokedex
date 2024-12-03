const pokemonHTML = document.querySelector('#pokemon-list');
const search = document.querySelector('#search');
search.oninput = searchPokemon;

let pokemonList = [];

async function getList() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await response.json();
        for (const pokemon of data.results) {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            pokemonList.push(data);
        }
        if (pokemonHTML.children.length < 20) {
            const listItem = document.createElement('li');
            listItem.onclick = detailsPokemon(data);
            const img = document.createElement('img');
            img.src = data.sprites.front_default;
            img.alt = data.name;
            listItem.appendChild(img);
            pokemonHTML.appendChild(listItem);
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

function detailsPokemon(pokemon) {
    const details = document.querySelector('#details');
    details.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Type: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>

        <h3>Abilities</h3>
        <ul>
            ${pokemon.stats.map(abilityInfo => `<li>${abilityInfo.stat.name}: ${abilityInfo.base_stat}</li>`).join('')}
    `;
}

function searchPokemon() {
    const value = search.value.toLowerCase();
    const filterPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(value));
    
}