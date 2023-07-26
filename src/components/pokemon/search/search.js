import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Convert input to lowercase
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Pass the lowercase search term to the parent component
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
