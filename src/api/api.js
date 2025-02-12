import axios from "axios";
export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
export const consultaApiRamaPrincipal = async () => {
  try {
    const { data } = await api.get("/");
    return data;
  } catch (err) {
    console.log(err);
  }
};
