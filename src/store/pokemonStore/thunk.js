import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  obtenerPokemonDescription,
  obtenerPokemonName,
} from "../../api/services/pokemonService";

export const buscarPokemon = createAsyncThunk("Pokemon", async (name) => {
  const datosDescripcionPokemon = await obtenerPokemonDescription(name);
  const datosPokemon = await obtenerPokemonName(name);
  return {
    datosDescripcionPokemon,
    datosPokemon,
  };
});
