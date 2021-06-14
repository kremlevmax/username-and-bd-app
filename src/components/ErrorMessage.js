import React from "react";
import Card from "./Card";
const ErrorMessage = (props) => {
  const submitButtonHandler = (event) => {
    event.preventDefault();
    props.onSubmit();
  };
  return (
    <Card>
      <div>
        <b>{props.message}</b>
      </div>
      <div>
        <button type='submit' onClick={submitButtonHandler}>
          Ok
        </button>
      </div>
    </Card>
  );
};
export default ErrorMessage;
