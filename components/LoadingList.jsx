const LoadingList = ({ loadingPokemons }) => {
    return (
      <div id="pokemon-loading">
        <ul>
          {loadingPokemons.map((name, index) => (
            <li key={index}>Loaded: {name}</li>
          ))}
        </ul>
      </div>
    );
  };
  