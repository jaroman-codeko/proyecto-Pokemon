import React from "react";

import "./HeaderComponent.css";

export const HeaderComponent = () => {
  return (
    <header className>
      <div className="linea">
        <div className="pokeball"></div>
      </div>
      <nav>
        <ul>
          <li className="violeta">Pokemons</li>
          <li className="violeta">Generaciones</li>
          <li className="violeta">Objetos</li>
        </ul>
      </nav>
    </header>
  );
};
