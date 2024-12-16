// Main App Component
const root = document.getElementById('root');
let pokemonList = [];
let displayedPokemons = [];
let loadingPokemons = [];
let selectedPokemon = null;
let isLoading = true;

async function fetchPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        const data = await response.json();

        const pokemonPromises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
        });

        const allPokemonDetails = await Promise.all(pokemonPromises);

        for (const details of allPokemonDetails) {
            pokemonList.push(details);

            if (displayedPokemons.length < 20) {
                displayedPokemons.push(details);
            }

            renderApp();
        }

        isLoading = false;
        renderApp();
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        isLoading = false;
        renderApp();
    } finally {
        isLoading = false;
        loadingPokemons = [];
        renderApp();
    }
}


function handleSelectPokemon(pokemon) {
    selectedPokemon = pokemon;
    renderApp();
}

function handleSearch(searchTerm) {

    const value = searchTerm.toLowerCase();
    const filterPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(value));

    setTimeout(() => {
        if (!value) {
            displayedPokemons = pokemonList.slice(0, 20);
        } else {
            displayedPokemons = filterPokemon.slice(0, 20);
        }
        
        renderApp();
    }, 800);
}

const getPokemonTypeColor = (type) => {
    const colours = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
    };
  
    return colours[type] || colours['normal'];
  };
  
const PokemonTypeBadge = ({ type }) => {
const color = getPokemonTypeColor(type);

return (
    <span style={{
    backgroundColor: color,
    color: '#fff',
    padding: '10px',
    borderRadius: '20px',
    marginRight: '5px'
    }}>
    {type}
    </span>
);
};

function App() {
    return (
        <div>
            <NavBar />
            <SearchBar onSearch={handleSearch} />

            <main>
                <div>
                    {isLoading ? (
                        <div className="loading-overlay"><span>Loading Pokémon...</span></div> ) : 
                    (
                        <>
                            <LoadingList loadingPokemons={loadingPokemons} />
                            <div id="pokemon-list">
                                <PokemonList pokemons={displayedPokemons} onSelect={handleSelectPokemon} />
                            </div>

                            <div id="pokemon-details">
                                {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

function renderApp() {
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}

renderApp();
fetchPokemonData();

