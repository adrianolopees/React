import { useState, useEffect } from "react";

const ListRender = () => {
  const [list] = useState(["Adriano", "Pedro", "João", "Ana", "Sanmara"]);

  /* No mundo real você recebera os dados de um banco de dados */
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/users.json");
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        console.log("Erro ao buscar users", e);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="mt-28">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.nome} - {user.age}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListRender;
