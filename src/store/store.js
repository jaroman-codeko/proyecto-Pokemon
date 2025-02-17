import { configureStore } from "@reduxjs/toolkit";
import PokemonReducer from "./pokemonStore/PokemonSlice";
export const store = configureStore({
  reducer: {
    pokemon: PokemonReducer,
  },
});
