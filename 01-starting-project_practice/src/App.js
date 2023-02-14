import React from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [userDetailsList, setUserDetailsList] = React.useState([]);

  const addUserHandler = (name, age) => {
    setUserDetailsList((prevList) => {
      return [{ name: name, age: age, id: Math.random().toString() }, ...prevList];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userDetailsList} />
    </div>
  );
}

export default App;
