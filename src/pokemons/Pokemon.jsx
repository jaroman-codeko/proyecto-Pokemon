import play from "../../src/img/play.webp";
import { useMuestraPokemon } from "../hooks/useMuestraPokemon";

export const Pokemon = () => {
  const {
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
  } = useMuestraPokemon();

  return (
    <>
      {!loading ? (
        <div className="contenedor">
          <div className="caja my-1">
            <h2>{nombre}</h2>
            <h3>{mote}</h3>
            <div>
              {imagenesMovArr.map((el, index) => (
                <img key={index} src={el} alt={`Movimiento ${index}`} />
              ))}
              <div>
                <h4>Descripción</h4>
                <p>{descripcion}</p>
              </div>
              <p>Tipo 1: {tipo[0]?.type?.name || "Desconocido"}</p>
              {tipo[1] && <p>Tipo 2: {tipo[1]?.type?.name || "Desconocido"}</p>}
              <p>
                Habilidad 1:{" "}
                {(habilidad[0] && habilidad[0]?.ability?.name) || "Desconocida"}
              </p>
              {habilidad[1] && (
                <p>
                  Habilidad 2: {habilidad[1]?.ability?.name || "Desconocida"}
                </p>
              )}
              <p>Peso: {peso}</p>
              <p>Altura: {altura}</p>
              <p>Hábitat: {habitat}</p>
              <p>
                Grito:
                <button onClick={() => sonido.play()}>
                  <img width="30px" src={play} alt="play" />
                </button>
              </p>
              {estadisticas.map((el, index) => (
                <div
                  key={index}
                  style={{ marginTop: "15px", marginBottom: "25px" }}
                >
                  Estadística: {el.stat.name} - Puntos: {el.base_stat}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        "Cargando"
      )}
    </>
  );
};
