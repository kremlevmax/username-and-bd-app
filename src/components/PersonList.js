import React from "react";
import PersonItem from "./PersonItem";

const PersonList = (props) => {
  return props.data.map((item) => (
    <PersonItem
      name={item.username}
      age={item.age}
      key={props.data.indexOf(item)}
      check={props.data.indexOf(item)}
    />
  ));
};

export default PersonList;
