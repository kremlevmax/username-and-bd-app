import React, { useState } from "react";
import NewPersonForm from "./components/NewPersonForm";
import PersonList from "./components/PersonList";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let errorMessage = "";
  const [userList, setUserlist] = useState([]);
  const [isAgeNegative, setIsAgeNegative] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState();

  const addToUserList = (username, age) => {
    if (age < 1) {
      errorMessage = "Age can't be negative";
      setIsAgeNegative(true);
    } else if (age.trim() === "" || username.trim() === "") {
      errorMessage = "Form can't be empty";
      setIsFormEmpty(true);
    } else {
      setUserlist((prevState) => {
        return [...prevState, { username, age }];
      });
    }
  };
  return (
    <div>
      <div>
        <NewPersonForm onSubmit={addToUserList} isFormEmpty={isFormEmpty} />
      </div>
      <div>
        {(isFormEmpty || isAgeNegative) && (
          <ErrorMessage message={errorMessage} />
        )}
        <PersonList data={userList} />
      </div>
    </div>
  );
}

export default App;
