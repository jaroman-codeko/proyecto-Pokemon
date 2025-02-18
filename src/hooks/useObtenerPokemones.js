import { useEffect, useState } from "react";
import { obtenerPokemonName } from "../api/services/pokemonService";
import { useDispatch, useSelector } from "react-redux";
import {
  buscarPokemon,
  eliminaPokemonAlmacenado,
} from "../store/pokemonStore/thunk";
import { useNavigate } from "react-router";

export const useObtenerPokemones = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  dispatch(eliminaPokemonAlmacenado());
  const { pokemon, loading } = useSelector((state) => state.pokemon) || {};

  const [datos, setDatos] = useState([]);
  const [numero, setNumero] = useState(35);
  const [nuevo, setNuevo] = useState(true);
  const [numeroInicial, setNumeroInicial] = useState(1);
  const [pokemonNombre, setPokemonNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(buscarPokemon(pokemonNombre));
    setPokemonNombre("");
    navigate(`/pokemons/${pokemonNombre}`);
  };

  const obtenerDatos = async () => {
    try {
      const datosPoke = [];
      for (let index = numeroInicial; index <= numero; index++) {
        if (index >= 1026) {
          break;
        }
        datosPoke.push(obtenerPokemonName(index));
      }
      setNuevo(false);
      //Esto sirve para cuando estamos haciendo una petcion tan grande asegurar que se completen de manera paralela
      const contenedorDatos = await Promise.all(datosPoke);

      setDatos([...datos, ...contenedorDatos]);
    } catch (error) {
      console.error("Error obteniendo los datos:", error);
    }
  };

  useEffect(() => {
    if (nuevo) {
      obtenerDatos();
    }
  }, [nuevo]);

  return {
    handleSubmit,
    pokemonNombre,
    datos,
    setPokemonNombre,
    setNumeroInicial,
    setNumero,
    numero,
    setNuevo,
    dispatch,
    buscarPokemon,
    navigate,
  };
};
