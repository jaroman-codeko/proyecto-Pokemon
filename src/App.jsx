import { useEffect } from "react";
import "./App.css";
import {
  obtenerTodosPokemons,
  obtenerPokemonName,
  obtenerPokemonDescription,
  obtenerGeneraciones,
  obtenerGeneracionesId,
  obtenerItemId,
} from "./api/index";
function App() {
  const datos = async () => {
    //const s = await obtenerPokemonName(1);
    const data = await obtenerItemId(193);

    console.log(data);
  };

  useEffect(() => {
    datos();
  }, []);

  return <h1>Datos</h1>;
}

export default App;
