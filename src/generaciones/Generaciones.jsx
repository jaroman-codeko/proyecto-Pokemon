import { useObtenerGeneraciones } from "../hooks/useObtenerGeneraciones";

import "./Generaciones.css";

export const Generaciones = () => {
  const { generaciones } = useObtenerGeneraciones();

  return (
    <div className="generaciones-container">
      {generaciones.map(
        ({
          nombreRegion,
          movimientosGeneracion,
          pokemonGeneracionales,
          habilidadesGeneracion,
          tiposGeneracion,
          versionJuego,
        }) => (
          <div key={nombreRegion} className="generacion">
            <h2>{nombreRegion}</h2>
            <h4>Pokémon de esta generación:</h4>
            <ul>
              {pokemonGeneracionales.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            {habilidadesGeneracion.length > 0 && (
              <>
                <h4>Habilidades de esta generación:</h4>
                <ul>
                  {habilidadesGeneracion.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </>
            )}

            <h4>Movimientos de esta generación:</h4>
            <ul>
              {movimientosGeneracion.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            {tiposGeneracion.length > 0 && (
              <>
                <h4>Tipos de esta generación:</h4>
                <ul>
                  {tiposGeneracion.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </>
            )}

            <h4>Juegos de esta generación:</h4>
            <ul>
              {versionJuego.map(({ name }) => (
                <li key={name}>Pokémon {name}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};
