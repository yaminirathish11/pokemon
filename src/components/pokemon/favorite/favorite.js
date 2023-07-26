import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Favorite = ({ isStarClicked, handleStarClick }) => {
  return (
    <div className={`icon ${isStarClicked ? "yellow" : ""}`} onClick={handleStarClick}>
      <FontAwesomeIcon className="star" icon={faStar} size="lg" />
      {isStarClicked && <span className="favorite">Favorite</span>}
    </div>
  );
};

export default Favorite;