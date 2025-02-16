import "./Home.css";

export const Home = () => {
  return (
    <div className="flex justify-content-center aling-content-center contenedor">
      <div className="fila">
        <div className="caja mb-5 my-1 p-1">
          <h4>Servicios que proporciona web</h4>
        </div>
      </div>
      <div className="fila justify-content-center">
        <div className="col-4">
          <div className="caja py-1">
            <h3>Pokemon</h3>
            <p>
              En esta parte de la aplicación encontraremos a todos los pokemon
              disponibles en el juego{" "}
            </p>
          </div>
        </div>
        <div className="col-4  m-1">
          <div className="caja py-1">
            <h3>Generaciones</h3>
            <p>
              En esta parte de la aplicación encontraremos a todas las
              generaciones disponibles en el juego{" "}
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="caja py-1">
            <h3>Objetos</h3>
            <p>
              En esta parte de la aplicacion encontraremos a todos los objetos
              disponibles en el juego
            </p>
          </div>
        </div>
      </div>
      <div className="contenedor">
        <div className="caja my-2">
          <p className="py-2">
            <h3>Agradecimiento</h3>
            ¡Hola! Soy José Antonio, y es un placer compartir contigo esta
            aplicación que he diseñado con mucho cariño. Desde pequeño, Pokémon
            ha sido una de mis mayores pasiones, y esta vez quise llevar ese
            amor un paso más allá creando algo especial para los fans como yo.
            Cada detalle de esta aplicación ha sido pensado para ofrecer una
            experiencia divertida e inmersiva, capturando la esencia del mundo
            Pokémon. Espero que la disfrutes tanto como yo disfruté
            desarrollándola. ¡Gracias por probarla y bienvenido a esta aventura!
          </p>
        </div>
      </div>
    </div>
  );
};
