import React, { useEffect, useState } from "react";
import { obtenerItemId } from "../api/services/itemService";

export const useObjetos = () => {
  //variables que van a contener el estado de los objetos
  const [objetos, setObjetos] = useState([]);
  const [cargando, setCargando] = useState(true);

  //funcion encargada de obtener los datos de la api
  const obtenDatos = async () => {
    // funcion que recoje y convierte toda y cada uno de las promesas que a continuacion se convertiran en la resolucion Array from crea un array con un tamano a eleccion
    //del usuario
    const promesas = Array.from({ length: 150 }, (_, index) =>
      obtenerItemId(index + 1)
    );
    //
    const arr = await Promise.all(promesas);
    setObjetos(arr);
    setCargando(false);
  };

  useEffect(() => {
    obtenDatos();
  }, []);

  return { objetos, cargando };
};
