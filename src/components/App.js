const App = () => {
    return (
        <navBar>
            <searchBar></searchBar>
        </navBar>
        <pokemonList></pokemonList>
        <pokemonDetails></pokemonDetails>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));