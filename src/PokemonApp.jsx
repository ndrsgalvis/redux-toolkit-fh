import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemons";

export const PokemonApp = () => {
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <p>Loading... {isLoading ? "true" : "false"}</p>
      <hr />
      <ul>
        {pokemons.map((item, i) => (
          <li key={i}> {item.name} </li>
        ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page + 1))}>
        Siguiente página
      </button>
    </>
  );
};
