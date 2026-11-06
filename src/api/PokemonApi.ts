import axios from "axios";

const pokemonApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export { pokemonApi };
