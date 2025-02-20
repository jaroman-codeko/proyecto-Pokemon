import { useObjetos } from "../hooks/useObjetos";
import "./Objeto.css";

export const Objetos = () => {
  const { cargando, objetos } = useObjetos();

  return (
    <>
      {cargando ? (
        "Cargando"
      ) : (
        <div className="objetos-container">
          <h1>Objetos del Juego </h1>
          {objetos.map(({ descripcion, categoria, image, nombre, efecto }) => (
            <div key={nombre} className="objeto">
              <div>
                <h4>{nombre}</h4>
                <p className="categoria">Categoría: {categoria}</p>
                <p className="efecto">Efecto: {efecto}</p>
              </div>
              <div>
                <img src={image} alt={nombre} />
                <p className="descripcion">Descripción: {descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
