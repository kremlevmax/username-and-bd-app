import React from "react";
import Card from "./Card";

const PersonItem = (props) => {
  return (
    <Card>
      Name: {props.name} | Age: {props.age}
    </Card>
  );
};

export default PersonItem;
