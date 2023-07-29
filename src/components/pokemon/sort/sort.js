import React from "react";

const Sort = ({ onSort }) => {
  // Handle the select change event and call the onSort function with the selected value
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    onSort(selectedValue);
  };

  return (
    <div className="dropdown">
      <label htmlFor="sort">Sort By : </label>
      <select className="dropbutton" name="sort" id="sort" onChange={handleSortChange}>
        <option value="Reset">Reset</option>
        <option value="From A -> B">From A to B</option>
        <option value="From B -> A">From B to A</option>
        <option value="Favorite">Favorite</option>
      </select>
    </div>
  );
};

export default Sort;
