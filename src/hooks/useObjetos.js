import React, { useEffect, useState } from "react";
import { obtenerItemId } from "../api/services/itemService";

export const useObjetos = () => {
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

  return { objetos, cargando };
};
