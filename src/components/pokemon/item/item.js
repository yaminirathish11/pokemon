import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import './item.css';

const Item = () => {
  const { pokemon, pokemonStats, berries, name, moves } = useLoaderData();
  const { pokemonId } = useParams();
  const navigate = useNavigate(); // Add useNavigate hook

  const getPokemonImageUrl = (id) => {
    return `https://raw.githubusercontent.com/sashafirsov/pokeapi-sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  };

  const renderPokemonStats = () => {
    return Object.entries(pokemonStats).map(([key, value]) => {
      if (value?.name) {
        return (
          <div key={key}>
            <strong>{key}:</strong> {value.name}
          </div>
        );
      }
      return null; // Skip stats without a name
    });
  };

  const renderBerries = () => {
    return Object.entries(berries).map(([key, value]) => {
      if (value?.name) {
        return (
          <div key={key}>
            <strong>{key}:</strong> {value.name}
          </div>
        );
      }
      return null; // Skip berries without a name
    });
  };

  const handlePrevButtonClick = () => {
    const prevPokemonId = parseInt(pokemonId) - 1; // Calculate the ID of the previous Pokémon
    navigate(`/${prevPokemonId}`); // Navigate to the previous Pokémon
  };
  const handleNextButtonClick = () => {
    const nextPokemonId = parseInt(pokemonId) + 1; // Calculate the ID of the next Pokémon
    navigate(`/${nextPokemonId}`); // Navigate to the next Pokémon
  };
  

  return (
    <div>
      <div className="contentAlign">
        <div>
          <img className="independentPokemon" src={getPokemonImageUrl(pokemonId)} alt={name} />
          <h2>Hello, I'm {name}</h2>
        </div>
        <p>
          <span style={{ fontWeight: "bold" }}>Characteristic:</span>
          {pokemon.description}
          {renderPokemonStats()}
          {renderBerries()}
          <span style={{ fontWeight: "bold" }}>moves:</span>{moves[0]}
        </p>
        <div>
          <button onClick={handlePrevButtonClick}>Prev</button> {/* Add onClick event handler */}
          <button onClick={handleNextButtonClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
