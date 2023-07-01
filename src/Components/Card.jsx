import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./utils/useGlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ name, username, id }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();
  const { favs } = state;

  const isFavorite = favs.some((fav) => fav.id === id);

  const addFav = (e) => {
    e.stopPropagation();
    const newFav = { name, username, id };

    if (!isFavorite) {
      dispatch({ type: "ADD_FAV", payload: newFav });
      dispatch({
        type: "SET_NOTIFICATION",
        payload: `${name} has been added to favorites!`,
      });
    }
  };

  const handleCardClick = () => {
    navigate(`/dentist/${id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={process.env.PUBLIC_URL + "/images/doctor.jpg"} alt={name} />
      <h2>{name}</h2>
      <p>{username}</p>
      <p>ID: {id}</p>
      {!isFavorite && (
        <button className="favButton" onClick={addFav}>
          <FontAwesomeIcon icon={faStar} className="star-icon" />
        </button>
      )}
    </div>
  );
};

export default Card;
