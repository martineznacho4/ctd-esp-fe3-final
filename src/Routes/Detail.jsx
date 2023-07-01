import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/useGlobalContext";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { state } = useGlobalContext();
  const { theme } = state;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data));
  }, [id]);

  if (!dentist) {
    return <p>Loading...</p>;
  }

  return (
    <div className={`detail-page ${theme}`}>
      <h1>Detail Dentist id {id}</h1>
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <th>Website:</th>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
