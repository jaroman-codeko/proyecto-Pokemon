import { api } from "../api";

export const obtenerTodosItems = async () => {
  try {
    const {
      data: { results },
    } = await api.get("/item/?offset=0&limit=2180");

    return results;
  } catch (err) {
    console.log(err);
  }
};

export const obtenerItemId = async (id) => {
  try {
    const { data: results } = await api.get(`/item/${id}`);
    const {
      attributes,
      category,
      effect_entries,
      flavor_text_entries,
      names,
      sprites,
      name,
    } = results;

    const item = flavor_text_entries.find((el) => el.language.name == "es");

    const obj = {
      atributos: attributes,
      categoria: category.name,
      efecto: effect_entries[0]?.effect,
      descripcion: item?.text,
      nombres: names,
      nombre: name,
      image: sprites?.default,
    };

    return obj;
  } catch (err) {
    console.log(err);
  }
};
