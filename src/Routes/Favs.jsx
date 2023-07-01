import React, { useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(GlobalContext);
  const { favs, theme } = state;

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${theme}`}>
        {favs.map((fav) => (
          <Card
            key={fav.id}
            name={fav.name}
            username={fav.username}
            id={fav.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
