import { useState } from "react";
import InputForm from "./components/InputForm";
import UserList from "./components/UserList";


function App() {
  const [userDetails, setUserDetails] = useState([]);
  const handleDetails = (newUserName, newAge) => {
    setUserDetails((previous) => {
      return [...previous, { name: newUserName, age: newAge, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <InputForm addDetails={handleDetails} />
      <UserList users={userDetails} />
    </div>
  );
}

export default App;
