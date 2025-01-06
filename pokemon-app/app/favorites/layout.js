import React from "react";

export default function FavoritesLayout({ children }) {
    return (
        <div>
            {/* Tytuł sekcji ulubionych */}
            <h1>Ulubione Pokemony</h1>

            {/* Dynamiczna zawartość ulubionych Pokémonów (dzieci) */}
            <div id="favorites-list">
                {children}
            </div>
        </div>
    );
}
