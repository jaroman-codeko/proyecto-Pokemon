import { data } from "react-router";
import { api } from "../api";

//consulta a la api  cual obtiene todos los pokemons
export const obtenerTodosPokemons = async () => {
  try {
    const {
      data: { results },
    } = await api.get("/pokemon?limit=100000&offset=0");

    return results;
  } catch (err) {
    console.log(err);
  }
};
//obtiene un pokemon por el nombre o numero
export const obtenerPokemonName = async (names) => {
  try {
    const { data } = await api.get(`/pokemon/${names}`);

    const {
      abilities,
      cries: { latest },

      id,
      height,
      moves,
      sprites: {
        back_default,
        front_default,
        back_shiny,
        front_shiny,
        other: { showdown },
      },
      stats,
      types,
      weight,
      name,
    } = data;

    const pokemonData = {
      habilidad: abilities,
      nombre: name,
      grito: latest,
      id,
      movimiento: moves,
      vistaTrasera: back_default,
      vistaFrontal: front_default,
      vistaTraseraShiny: back_shiny,
      vistaFrontalShiny: front_shiny,
      imagenesMovimiento: showdown,
      estadisticas: stats,
      tipo: types,
      peso: weight,
      altura: height,
    };

    return pokemonData;
  } catch (err) {
    console.log("Error obteniendo el Pokemon:", err);
  }
};

export const obtenerPokemonDescription = async (id) => {
  const { data: result } = await api.get(`/pokemon-species/${id}`);

  const { flavor_text_entries, genera, habitat, names } = result;
  const obj = {
    descripcion: flavor_text_entries[26]?.flavor_text,
    mote: genera[5]?.genus,
    habitat: habitat?.name || "Desconocido",
    nombresIdiomas: names,
  };
  return obj;
};
