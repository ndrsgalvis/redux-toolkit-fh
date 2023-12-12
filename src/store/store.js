import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { todosApi } from "./apis";
import { pokemonSlice } from "./slices/pokemons";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
