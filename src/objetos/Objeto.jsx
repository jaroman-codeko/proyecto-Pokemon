import React from "react";
import { useObjetos } from "../hooks/useObjetos";
export const Objeto = () => {

 const {objetos}=useObjetos();
  
  const objeto=objetos.find(el=>el.name=="master-ball")

  return <div>
    <p>{objeto.name}</p>
    <img src={objeto.image} alt="" />
  </div>;
};
