import React from "react";

import "./HeaderComponent.css";
import { Link } from "react-router";

export const HeaderComponent = () => {
  return (
    <header>
      <div>
        <div className="pokeball"></div>
      </div>
      <nav>
        <ul>
          <li className="gray">
            <Link to={"/"}> Inicio</Link>
          </li>
          <li className="gray">
            <Link to={"/pokemons"}> Pokemon</Link>
          </li>
          <li className="gray">
            <Link to={"/generaciones"}>Generaciones </Link>
          </li>
          <li className="gray">
            <Link to={"/objetos"}>Objetos </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
