import axios from "axios";

export const instance = axios.create({
  baseUrl: "https://pokeapi.co/api/v2",
});
