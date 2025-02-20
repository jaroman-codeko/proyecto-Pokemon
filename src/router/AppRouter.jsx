import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Home } from "../home/Home";
import { Pokemon, Pokemons } from "../pokemons";
import { Generaciones } from "../generaciones";
import { Objetos, Objeto } from "../objetos/";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pokemons">
        <Route index element={<Pokemons />} />
        <Route path=":id" element={<Pokemon />} />
      </Route>

      <Route path="/generaciones" element={<Generaciones />} />

      <Route path="/objetos">
        <Route index element={<Objetos />} />
        <Route path=":id" element={<Objeto />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
