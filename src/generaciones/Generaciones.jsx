import React, { useEffect, useState } from "react";
import {
  obtenerGeneraciones,
  obtenerGeneracionesId,
} from "../api/services/generacionService";

export const Generaciones = () => {
  const [generaciones, setGeneraciones] = useState([]);

  const obtenDatos = async () => {
    const data = await obtenerGeneraciones();

    const arr = data.map(({ name }) => obtenerGeneracionesId(name));

    const arrayDatos = await Promise.all(arr);

    setGeneraciones(arrayDatos);
  };
  useEffect(() => {
    obtenDatos();
  }, []);
  console.log(generaciones);
  return (
    <div>
      {generaciones.map(
        ({
          nombreRegion,
          movimientosGeneracion,
          pokemonGeneracionales,
          habilidadesGeneracion,
          tiposGeneracion,
          versionJuego,
        }) => (
          <div>
            <h2 key={nombreRegion}>{nombreRegion}</h2>
            <h4>pokemon que vienen en esta Generacion:</h4>
            <ul>
              {pokemonGeneracionales.map(({ name }) => (
                <li>{name}</li>
              ))}
            </ul>
            {habilidadesGeneracion.length >= 1 && (
              <>
                <h4>habilidades de esta generacion </h4>
                <ul>
                  {habilidadesGeneracion.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </>
            )}
            <h4>Movimientos de esta generacion </h4>
            <ul>
              {movimientosGeneracion.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            {tiposGeneracion.length >= 1 && (
              <>
                <h4>Tipos de esta generacion </h4>
                <ul>
                  {tiposGeneracion.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </>
            )}

            <h4>Juegos de esta generacion </h4>
            <ul>
              {versionJuego.map(({ name }) => (
                <li key={name}> Pokemon {name}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};
