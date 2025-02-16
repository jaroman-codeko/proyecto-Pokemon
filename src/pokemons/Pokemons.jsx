import React, { useEffect, useState } from "react";
import { obtenerPokemonName } from "../api/services/pokemonService";
export const Pokemons = () => {
  const [datos, setDatos] = useState([]);

  const obtenerDatos = async () => {
    const contenedorDatos = [];

    for (let index = 1; index <= 10; index++) {
      const pokemon = await obtenerPokemonName(index);
      contenedorDatos.push(pokemon);
    }
    setDatos(contenedorDatos);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  useEffect(() => {
    console.log(datos);
  }, [datos]);

  return (
    <div>
      <div className="contenedor">
        <div className="fila">
          {datos?.map(({ id, nombre, imagenesMovimiento, tipo }) => (
            <div className="col-3 mx-1" key={id || nombre}>
              <div className="caja">
                <h4>Pokemon</h4>
                <h6>Nombre: {nombre}</h6>
                {imagenesMovimiento?.front_default ? (
                  <img src={imagenesMovimiento.front_default} alt={nombre} />
                ) : (
                  <p>Imagen no disponible</p>
                )}
                <h6>Tipo 1: {tipo?.[0]?.type?.name || "Desconocido"}</h6>
                {tipo?.[1] && <h6>Tipo 2: {tipo[1]?.type?.name}</h6>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
