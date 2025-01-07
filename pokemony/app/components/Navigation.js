import React from 'react';
import Link from 'next/link';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pokemon">Pokedex</Link></li>
                <li><Link href="/favorites">Favorites</Link></li>
                <li><Link className="coming-soon" href="#">GCC Pokemon</Link></li>
                <li><Link className="coming-soon" href="#">TV Pokemon</Link></li>
                <li><Link className="coming-soon" href="#">Play! Pokemon</Link></li>
                <li><Link className="coming-soon" href="#">News</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
