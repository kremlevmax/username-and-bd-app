import React, { useState } from "react";
import Card from "./Card";

const NewPersonForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameOnChangeHangler = (event) => {
    setUsername(event.target.value);
  };

  const ageOnChangeHangler = (event) => {
    setAge(event.target.value);
  };

  const submitButtonHnadler = (event) => {
    event.preventDefault();
    props.onSubmit(username, age);
    setUsername("");
    setAge("");
  };

  return (
    <Card>
      <form onSubmit={submitButtonHnadler}>
        <label>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          value={username}
          onChange={usernameOnChangeHangler}
        ></input>
        {"   "}
        || {"   "}
        <label>Age:</label>
        <input
          type='text'
          id='age'
          name='age'
          value={age}
          onChange={ageOnChangeHangler}
        ></input>
        <button type='subnit'>Save Person</button>
      </form>
    </Card>
  );
};

export default NewPersonForm;
