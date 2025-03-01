import React from "react";

export default function FavoritesLayout({ children }) {
    return (
        <div>
            <h1>Ulubione Pokemony</h1>

            <div id="favorites-list">
                {children}
            </div>
        </div>
    );
}
