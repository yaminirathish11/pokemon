import "./list.css";
import { useNavigate, useLoaderData } from "react-router-dom";


const PokemonList = () => {
  const navigate = useNavigate();
  const { pokemonList } = useLoaderData();

  const getPokemonImageUrl = (id) => {
    return `https://raw.githubusercontent.com/sashafirsov/pokeapi-sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  };

  const handleButtonClick = (id) => {
    console.log(id);
    navigate(`/${id}`);
  };

  const renderPokeman = (pokeman, index) => {
    const { url, name } = pokeman;
    const splitData = url.split("/");
    const id = splitData[splitData.length - 2];
    const imageUrl = getPokemonImageUrl(id);

    return (
      <button  className = "pokemonbutton" key={id} onClick={() => handleButtonClick(id)}>
        <img className="buttonimg" src={imageUrl} alt={name} />
        {name}
      </button>
    );
  };

  return (
    <div>
      <h1 style={{ backgroundImage: `url("/pokemon-header.jpeg")` }}>
        Welcome to Minni's pokemon world
      </h1>
      <div className="landPage">
        {pokemonList.map((pokeman, id) => renderPokeman(pokeman, id))}
      </div>
    </div>
  );
};

export default PokemonList;
