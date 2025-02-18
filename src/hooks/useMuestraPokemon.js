import { useSelector } from "react-redux";

export const useMuestraPokemon = () => {
  const { pokemon, loading } = useSelector((state) => state.pokemon) || {};
  const { datosDescripcionPokemon = {}, datosPokemon = {} } = pokemon || {};

  const { mote, descripcion, habitat, nombreIdiomas } = datosDescripcionPokemon;
  const {
    altura,
    estadisticas,
    grito,
    habilidad,
    imagenesMovimiento,
    nombre,
    peso,
    tipo,
  } = datosPokemon;

  let imagenesMovArr = Object.values(imagenesMovimiento || {}).filter(
    (url) => url !== null
  );

  let imagenesMovArrTemp = imagenesMovArr[0];
  imagenesMovArr[0] = imagenesMovArr[imagenesMovArr.length - 1];
  imagenesMovArr[imagenesMovArr.length - 1] = imagenesMovArrTemp;
  const sonido = new Audio(grito);

  return {
    loading,
    mote,
    descripcion,
    nombreIdiomas,
    altura,
    estadisticas,
    habilidad,
    imagenesMovArr,
    sonido,
    nombre,
    peso,
    tipo,
    habitat,
  };
};
