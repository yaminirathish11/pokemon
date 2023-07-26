import axios from "axios";

export async function loader({ params }) {
  try {
    const pokemonObject = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`
    );
    const response = await axios.get(
      `https://pokeapi.co/api/v2/characteristic/${params.pokemonId}`
    );
    const statsResponse = await axios.get(
      `https://pokeapi.co/api/v2/nature/${params.pokemonId}`
    );
    const berryResponse = await axios.get(
      `https://pokeapi.co/api/v2/berry/${params.pokemonId}`
    );
    const des = response?.data.descriptions.find(
      (description) => description.language.name === "en"
    );
    const moves =
      pokemonObject.data?.moves.length > 0
        ? pokemonObject.data.moves.map((moveObj) => moveObj.move.name)
        : [];
        console.log(moves, "moves---------->  ")
    return {
      pokemon: des,
      pokemonStats: statsResponse.data,
      berries: berryResponse.data,
      name: pokemonObject.data.name,
      moves,
    };
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    return { pokemon: null, pokemonStats: null };
  }
}