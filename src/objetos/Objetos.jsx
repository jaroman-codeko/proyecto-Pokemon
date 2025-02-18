import React, { useEffect, useState } from "react";
import { obtenerItemId } from "../api/services/itemService";
import "./Objeto.css";

export const Objetos = () => {
  const [objetos, setObjetos] = useState([]);

  const obtenDatos = async () => {
    let arr = [];

    for (let index = 1; index <= 100; index++) {
      const element = await obtenerItemId(index);
      arr.push(element);
    }

    setObjetos(arr);
  };

  useEffect(() => {
    obtenDatos();
  }, []);

  return (
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
  );
};
