import "./list.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import Favorite from "/Users/yamini/pokemon/src/components/pokemon/favorite/favorite.js";
import Search from "/Users/yamini/pokemon/src/components/pokemon/search/search.js";
import Pagination from "/Users/yamini/pokemon/src/components/pokemon/pagination/pagination.js";

const PokemonList = () => {
  const navigate = useNavigate();
  const { pokemonList } = useLoaderData();
  const [clickedPokemonIds, setClickedPokemonIds] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState(pokemonList);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    setData(filteredPokemonList);
  }, [filteredPokemonList]);

  const getPokemonImageUrl = (id) => {
    return `https://raw.githubusercontent.com/sashafirsov/pokeapi-sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  };

  const handleButtonClick = (id) => {
    console.log(id);
    navigate(`/${id}`);
  };

  const handleStarClick = (id) => {
    if (clickedPokemonIds.includes(id)) {
      setClickedPokemonIds((prevClickedPokemonIds) =>
        prevClickedPokemonIds.filter((pokemonId) => pokemonId !== id)
      );
    } else {
      setClickedPokemonIds((prevClickedPokemonIds) => [
        ...prevClickedPokemonIds,
        id,
      ]);
    }
  };
  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const handleSearch = (searchTerm) => {
    const filteredList = pokemonList.filter((pokeman) =>
      pokeman.name.toLowerCase().includes(searchTerm)
    );
    setFilteredPokemonList(filteredList);
  };

  const renderPokeman = (pokeman, index) => {
    const { url, name } = pokeman;
    const splitData = url.split("/");
    const id = splitData[splitData.length - 2];
    const imageUrl = getPokemonImageUrl(id);
    const isStarClicked = clickedPokemonIds.includes(id);

    return (
      <div key={id}>
        <div>
          <Favorite
            isStarClicked={isStarClicked}
            handleStarClick={() => handleStarClick(id)}
          />
        </div>
        <button className="pokemonbutton" onClick={() => handleButtonClick(id)}>
          <img className="buttonimg" src={imageUrl} alt={name} />
          <b>{toTitleCase(name)}</b>
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ backgroundImage: `url("/pokemon-header.jpeg")` }}>
        Welcome to Minni's pokemon world
      </h1>
      <div className="search">
        <Search onSearch={handleSearch} />
      </div>
      <div className="landPage">
        {/* {filteredPokemonList.map((pokeman, id) => renderPokeman(pokeman, id))}
      </div>
      <div> */}
        {subset.map((pokeman, id) => renderPokeman(pokeman, id))}
      </div>
      <div>
        {subset.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
        <Pagination
          pageCount={totalPages}
          onPageChange={handlePageChange}
          forcePage={currentPage}
        />
      </div>
    </div>
  );
};

export default PokemonList;
