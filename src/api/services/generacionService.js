import { api } from "../api";

export const obtenerGeneraciones = async () => {
  const { data: result } = await api.get("/generation");
  const { results } = result;
  return results;
};

export const obtenerGeneracionesId = async (id) => {
  const { data: result } = await api.get(`/generation/${id}`);

  const {
    main_region,
    moves,
    names,
    pokemon_species,
    types,
    version_groups,
    abilities,
  } = result;

  const obj = {
    nombreRegion: main_region.name,
    movimientosGeneracion: moves,
    nombreGeneracion: names[5],
    pokemonGeneracionales: pokemon_species,
    tiposGeneracion: types,
    versionJuego: version_groups,
    habilidadesGeneracion: abilities,
  };

  return obj;
};
