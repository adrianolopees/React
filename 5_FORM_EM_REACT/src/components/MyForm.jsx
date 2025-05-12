import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  /*6 - Controlled inputs  */
  /*3 - Gerenciamento de Dados */
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o fomulário");
    console.log(name, email);
  };
  /*   console.log(name);
  console.log(email); */
  return (
    <div>
      {/* 5- Envio de form */}
      {/* 1- criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo o input */}
        <label>
          <span>Email:</span>
          {/* 4 - Simplificação de manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
