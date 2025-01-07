import React from 'react';
import FavoritesPage from './page';

export default function Favorites({ children }) {

    return (
        <div className="favorites-layout">
            <div className="favorites-list">
                <FavoritesPage />
            </div>
        </div>

    );

}
