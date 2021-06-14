import React from "react";

const PersonItem = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.check}</div>
    </div>
  );
};

export default PersonItem;
