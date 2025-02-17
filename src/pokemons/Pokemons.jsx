import React, { useEffect, useRef, useState } from "react";
import { obtenerPokemonName } from "../api/services/pokemonService";
export const Pokemons = () => {
  const [datos, setDatos] = useState([]);
  const [numero, setNumero] = useState(35);
  const [nuevo, setNuevo] = useState(false);
  const [numeroInicial, setNumeroInicial] = useState(1);

  const obtenerDatos = async () => {
    const contenedorDatos = [];

    for (let index = numeroInicial; index <= numero; index++) {
      const pokemon = await obtenerPokemonName(index);

      contenedorDatos.push(pokemon);
    }
    let datosPokemon = [...datos, ...contenedorDatos];
    console.log(datosPokemon);

    setDatos(datosPokemon);
    setNuevo(false);
  };

  useEffect(() => {
    obtenerDatos();
  }, [nuevo]);

  return (
    <>
      <div className="contenedor my-1 flex justify-content-center aling-content-center">
        <div className="caja p-1 ">
          <h2 className="">Buscar por nombre un pokemon en concreto:</h2>
          <form action="">
            <input
              type="text"
              className="m-1 py-1 px-1"
              placeholder="Nombre del pokemon"
            />
            <button className="btn btn-red">Buscar</button>
          </form>
        </div>
      </div>
      <div className="contenedor">
        <div className="fila">
          {datos?.map(({ id, nombre, imagenesMovimiento, tipo }) => (
            <div className="col-3 mx-1" key={id || nombre}>
              <div className="caja">
                <h4>Pokemon</h4>
                <h6>
                  Nombre: {nombre[0].toUpperCase().concat(nombre.slice(1))}
                </h6>
                {imagenesMovimiento?.front_default ? (
                  <img src={imagenesMovimiento.front_default} alt={nombre} />
                ) : (
                  <p>Imagen no disponible</p>
                )}
                <h6>
                  Tipo 1:{" "}
                  {tipo?.[0]?.type?.name[0]
                    .toUpperCase()
                    .concat(tipo?.[0]?.type?.name.slice(1)) || "Desconocido"}
                </h6>
                {tipo?.[1] && (
                  <h6>
                    Tipo 2:{" "}
                    {tipo?.[1]?.type?.name[0]
                      .toUpperCase()
                      .concat(tipo?.[1]?.type?.name.slice(1))}
                  </h6>
                )}
                <button
                  onClick={() => console.log(nombre)}
                  className="btn my-1"
                >
                  Ver mas
                </button>
              </div>
            </div>
          ))}
        </div>
        {nuevo ? "cargando..." : ""}
        <div className="flex justify-content-center align-content-center">
          <button
            className="btn my-1"
            onClick={() => {
              setNumero(numero + 25);
              setNuevo(true);
              setNumeroInicial(numero + 1);
            }}
          >
            Nuevos
          </button>
        </div>
      </div>
    </>
  );
};
