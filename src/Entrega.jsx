import React, { useEffect, useState } from "react";

export const Entrega = () => {
  const [meme, setMeme] = useState([]);

  const html = meme.map(({ name, url, id }) => (
    <li key={id}>
      nombre : {name} <img src={url} alt={name} />
    </li>
  ));

  const peticion = async () => {
    const respuesta = await fetch("https://api.imgflip.com/get_memes");
    const {
      data: { memes },
    } = await respuesta.json();
    setMeme(memes);
    console.log(memes);
  };

  useEffect(() => {
    peticion();
  }, []);

  return <ul>{html}</ul>;
};
