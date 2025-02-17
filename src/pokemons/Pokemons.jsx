import { useObtenerPokemones } from "../hooks/useObtenerPokemones";
export const Pokemons = () => {
  const {
    handleSubmit,
    pokemonNombre,
    datos,
    nuevo,
    setPokemonNombre,
    setNumero,
    setNumeroInicial,
    numero,
    setNuevo,
    dispatch,
    buscarPokemon,
    navigate,
  } = useObtenerPokemones();

  return (
    <>
      <div className="contenedor">
        <div className=" fila flex justify-content-center align-content-center my-1">
          <div className="caja p-1 ">
            <h2>Buscar por nombre un Pokémon en concreto:</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="m-1 py-1 px-1 inputText"
                placeholder="Nombre del Pokémon"
                value={pokemonNombre}
                name={pokemonNombre}
                onChange={(e) => setPokemonNombre(e.target.value)}
              />
              <button className="btn btn-red">Buscar</button>
            </form>
          </div>
        </div>
      </div>
      <div className="contenedor">
        <div className="fila">
          {datos.map(
            ({ id, nombre, imagenesMovimiento, tipo, vistaFrontal }) => (
              <div className="col-3 mx-1" key={id || nombre}>
                <div className="caja">
                  <h4>Pokémon</h4>
                  <h6>Nombre: {nombre[0].toUpperCase() + nombre.slice(1)}</h6>
                  {imagenesMovimiento?.front_default ? (
                    <img src={imagenesMovimiento.front_default} alt={nombre} />
                  ) : (
                    <img src={vistaFrontal} alt={nombre} />
                  )}
                  <h6>
                    Tipo 1:
                    {tipo?.[0]?.type?.name[0].toUpperCase() +
                      tipo?.[0]?.type?.name.slice(1) || "Desconocido"}
                  </h6>
                  {tipo?.[1] && (
                    <h6>
                      Tipo 2:
                      {tipo?.[1]?.type?.name[0].toUpperCase() +
                        tipo?.[1]?.type?.name.slice(1)}
                    </h6>
                  )}
                  <button
                    onClick={() => {
                      dispatch(buscarPokemon(nombre));
                      navigate(`/pokemons/${nombre}`);
                    }}
                    className="btn my-1"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        {nuevo && <p>Cargando...</p>}
        <div className="flex justify-content-center align-content-center">
          <button
            className="btn my-1"
            onClick={() => {
              setNumero((prev) => prev + 250);
              setNumeroInicial(numero + 1);
              setNuevo(true);
            }}
          >
            Nuevos
          </button>
        </div>
      </div>
    </>
  );
};
