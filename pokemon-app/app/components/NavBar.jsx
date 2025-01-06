import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/pokemon">Pokedex</a>
        </li>
        <li>
          <a href="/favorites">Favorites</a>
        </li>
        <li>
          <a className="coming-soon" href="#">
            GCC Pokemon
          </a>
        </li>
        <li>
          <a className="coming-soon" href="#">
            TV Pokemon
          </a>
        </li>
        <li>
          <a className="coming-soon" href="#">
            Play! Pokemon
          </a>
        </li>
        <li>
          <a className="coming-soon" href="#">
            News
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
