import React from "react";
import Form from "../Components/Form";
import { useGlobalContext } from "../Components/utils/useGlobalContext";

const Contact = () => {
  const { state } = useGlobalContext();
  const { theme } = state;

  return (
    <div className={`contact-page ${theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
