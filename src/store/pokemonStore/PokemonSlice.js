import { createSlice } from "@reduxjs/toolkit";
import { buscarPokemon } from "./thunk";

const initialState = { loading: null, pokemon: {}, status: null };

const setLoading = (state) => {
  state.loading = true;
};

const unsetLoading = (state) => {
  state.loading = false;
};

const PokemonSlice = createSlice({
  name: "Pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarPokemon.fulfilled, (state, action) => {
        state.pokemon = action.payload;
        unsetLoading(state);
      })
      .addMatcher((action) => action.type.endsWith("/pending"), setLoading)
      .addMatcher((action) => action.type.endsWith("/rejected"), unsetLoading);
  },
});

export default PokemonSlice.reducer;
