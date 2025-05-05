import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("Pedro");
  return (
    <div>
      <h1>Isso vai ser exibido?</h1>
      {x && <p>X é true e vai ser exibido</p>}
      {!x && <p>X é false </p>}
      <h1>If ternário</h1>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>O nome não encontrado.</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Clique Aqui</button>
    </div>
  );
};

export default ConditionalRender;
