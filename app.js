const pokemonHTML = document.querySelector('#list');
const input = document.querySelector('#search');
//const search = document.querySelector('#search-button');
const container = document.querySelector('#pokemon-loading');
const loadingText = document.querySelector('#loading');


//search.onclick = () => searchPokemon();
input.onkeyup = (event) => searchPokemon();
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchPokemon();
    }
});
let pokemonList = [];



async function getList() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1500');
        const data = await response.json();
        for (const pokemon of data.results) {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            pokemonList.push(data);

            if (pokemonHTML.children.length < 20) {
                createList(pokemonList, 20);
                console.log('createList');
            }

            const nameElement = document.createElement('li');
            nameElement.textContent = `Loaded: ${pokemon.name}`;

            if (loadingText.children.length < 30) {
                loadingText.appendChild(nameElement);
            } else {
                loadingText.removeChild(loadingText.firstChild);
                loadingText.appendChild(nameElement);
            }
        }    
    } catch (error) {
        console.error("Error fetching data: ", error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Error fetching data. Please try again later.';
        pokemonHTML.appendChild(errorMessage);
    } finally {
        container.style.display = 'none';
    }
}


function detailsPokemon(pokemon) {
    const details = document.querySelector('#pokemon-details');
    details.innerHTML = `
        <img src="${pokemon.sprites.other.showdown.front_default}" alt="${pokemon.name}">
        <p class='id'>#${pokemon.id}</p>
        <h2>${pokemon.name}</h2>
        <ul class='types'>${pokemon.types.map(typeInfo => `<li>${typeInfo.type.name}</li>`).join('')}</ul>
        <h3>Abilities</h3>
        <ul class='abilities'>${pokemon.abilities.map(abilityInfo => `<li>${abilityInfo.ability.name}</li>`).join('')}</ul>
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>Base Experience: ${pokemon.base_experience}</p>
        <h3>Stats</h3>
        <ul class='stats'>${pokemon.stats.map(abilityInfo => `<li>${abilityInfo.stat.name}: ${abilityInfo.base_stat}</li>`).join('')}</ul>
    `;
}



function searchPokemon() {
    const value = input.value.toLowerCase();
    const filterPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(value));

    if (!value) {
        createList(pokemonList, 20);
        return;
    }
    if (filterPokemon.length === 0) {
        pokemonHTML.innerHTML = '';
        const noResult = document.createElement('p');
        noResult.textContent = 'No Pokémon found';
        pokemonHTML.appendChild(noResult);
    } else {
        createList(filterPokemon);        
    }
}

function createList(pokemons, number) {

    const pokemonsToDisplay = number ? pokemons.slice(0, number) : pokemons;
    
    pokemonHTML.innerHTML = '';

    pokemonsToDisplay.forEach(pokemon => {
        const listItem = document.createElement('li');
        listItem.onclick = () => detailsPokemon(pokemon);
        const img = document.createElement('img');
        const id = document.createElement('p');
        const name = document.createElement('p');
        img.src = pokemon.sprites.front_default;
        img.alt = pokemon.name;
        name.textContent = pokemon.name;
        id.textContent = `#${pokemon.id}`;
        listItem.appendChild(img);
        listItem.appendChild(id);
        listItem.appendChild(name);
        pokemonHTML.appendChild(listItem);
    });
        
}


getList();

