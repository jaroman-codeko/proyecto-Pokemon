import React, { useEffect, useState } from "react";
import { obtenerItemId } from "../api/services/itemService";
import "./Objeto.css";

export const Objetos = () => {
  const [objetos, setObjetos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenDatos = async () => {
    const promesas = Array.from({ length: 150 }, (_, index) =>
      obtenerItemId(index + 1)
    );
    const arr = await Promise.all(promesas);
    setObjetos(arr);
    setCargando(false);
  };

  useEffect(() => {
    obtenDatos();
  }, []);

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
