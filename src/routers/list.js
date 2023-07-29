import axios from "axios";

export async function loader() {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=1010`
    );
    return {
      pokemonList: response.data.results
    };
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    return { pokemonList: []};
  }
}
