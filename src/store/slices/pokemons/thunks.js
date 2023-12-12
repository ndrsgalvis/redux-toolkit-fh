import { instance } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await instance.get(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    );
    console.log({ data });

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
