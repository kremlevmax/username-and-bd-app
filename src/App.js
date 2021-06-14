import React, { useState } from "react";
import NewPersonForm from "./components/NewPersonForm";
import PersonList from "./components/PersonList";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [errorMessage, setErrorMessage] = useState();
  const [userList, setUserlist] = useState([]);
  const [isAgeNegative, setIsAgeNegative] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState();

  const addToUserList = (username, age) => {
    if (age.trim() === "" || username.trim() === "") {
      setIsFormEmpty(true);
      setErrorMessage("Form can't be empty");
      return;
    } else if (+age < 1) {
      setIsAgeNegative(true);
      setErrorMessage("Age can't be negative");
      return;
    } else {
      setUserlist((prevState) => {
        return [...prevState, { username, age }];
      });
    }
  };

  console.log(errorMessage);
  const submitBurttonHandler = () => {
    setIsFormEmpty(false);
    setIsAgeNegative(false);
  };
  return (
    <div>
      <div>
        <NewPersonForm onSubmit={addToUserList} isFormEmpty={isFormEmpty} />
      </div>
      <div>
        {(isFormEmpty || isAgeNegative) && (
          <ErrorMessage
            message={errorMessage}
            onSubmit={submitBurttonHandler}
          />
        )}
        <PersonList data={userList} />
      </div>
    </div>
  );
}

export default App;
