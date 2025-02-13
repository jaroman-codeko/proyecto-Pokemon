import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../home/Home";
import { Pokemon, Pokemons } from "../pokemons";
import { Generacion, Generaciones } from "../generaciones";
import { Objetos, Objeto } from "../objetos/";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Home></Home>}></Route>
      <Route path="/pokemons/*" element={<Pokemon></Pokemon>}></Route>
      <Route path="/pokemons" element={<Pokemons></Pokemons>}></Route>
      <Route
        path="/generaciones"
        element={<Generaciones></Generaciones>}
      ></Route>
      <Route path="/generaciones/*" element={<Generacion></Generacion>}></Route>
      <Route path="/objetos" element={<Objetos></Objetos>}></Route>
      <Route path="/objetos/*" element={<Objeto></Objeto>}></Route>
    </Routes>
  );
};
