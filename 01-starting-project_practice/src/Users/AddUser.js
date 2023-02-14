import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = React.useState("");
  const [enteredAge, setEnteredAge] = React.useState("");
  const [errorState, setErrorState] = React.useState();

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorState({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setErrorState({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setErrorState(null);
  };

  return (
    <div>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onOkayClick={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button onClick={addUserHandler}>Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
