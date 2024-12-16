let searchTerm = "";

const SearchBar = ({ onSearch }) => {

    const handleChange = (event) => {
        searchTerm = event.target.value.toLowerCase();
        onSearch(searchTerm);
    };

    return (
        <div id="search-results">
            <input 
                type="text" 
                id="search" 
                placeholder="Szukaj Pokemona..." 
                onChange={handleChange}
            />
        </div>
    );
};