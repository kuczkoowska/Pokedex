const App = () => {
    pokemons = [];

    async function getList() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1500');
            const data = await response.json();
            for (const pokemon of data.results) {
                const response = await fetch(pokemon.url);
                const data = await response.json();
                pokemons.push(data);


                const nameElement = document.createElement('li');
                nameElement.textContent = `Loaded: ${pokemon.name}`;

                if (loadingText.children.length < 30) {
                    loadingText.appendChild(nameElement);
                } else {
                    loadingText.removeChild(loadingText.firstChild);
                    loadingText.appendChild(nameElement);
                }
                console.log(pokemon);
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

    getList();
    return (
        <>
            <NavBar>
                <SearchBar></SearchBar>
            </NavBar>
            <PokemonList pokemons={pokemons} />
            <PokemonDetails />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));