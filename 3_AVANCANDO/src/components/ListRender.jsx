import { useState } from "react";

const ListRender = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Adriano", age: 29 },
    { id: 2, name: "João", age: 49 },
    { id: 3, name: "Ana", age: 39 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </>
  );
};

export default ListRender;
