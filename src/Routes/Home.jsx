import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/useGlobalContext";

const Home = () => {
  const { state, dispatch } = useGlobalContext();
  const { dentists, theme } = state;

  useEffect(() => {
    if (dentists.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => dispatch({ type: "SET_DENTISTS", payload: data }));
    }
  }, [dentists, dispatch]);

  return (
    <main className={`home-page ${theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
