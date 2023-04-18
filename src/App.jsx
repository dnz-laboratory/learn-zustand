import { useEffect, useState } from "react";
import "./App.css";
import { useStore } from "./stores";
import { shallow } from "zustand/shallow";

function App() {
  const users = useStore((state) => state.users);
  const getUsers = useStore((state) => state.getUsers);
  const createUser = useStore((state) => state.createUser);
  const isLoading = useStore((state) => state.isLoading);

  const { userNameValue, setNewUser } = useStore(
    (state) => ({ userNameValue: state.name, setNewUser: state.setNewUser }),
    shallow
  );

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isLoading) return "Loading....";

  return (
    <div>
      <input
        type="text"
        value={userNameValue}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={createUser}>add user</button>
      {users.map((e, idx) => (
        <p key={idx}>{e.name}</p>
      ))}
    </div>
  );
}

export default App;
