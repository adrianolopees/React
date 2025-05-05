import { useState } from "react";
import ListRender from "./ListRender";
import ConditionalRender from "./ConditionalRender";

const ManegeData = () => {
  /* Tentando renderizar usando variável , não funciona */
  let someData = 10;
  /*  Agora da forma correta usando o useState */
  const [number, setNumber] = useState(20);

  /* Criando um contador de click */
  const [contador, setContador] = useState(0);
  const handleContarClick = () => {
    setContador(contador + 1);
  };

  /* Aqui vai retorna cogido JSX re-renderizando na página */
  return (
    <div>
      <div className="mt-28">
        {/*  Aqui não atualiza por que estamos usando variável */}
        <p>Valor:{someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>

      <div className="mt-28">
        {/* Aqui atualiza pois ja estamos usando o useState */}
        <p>Valor:{number}</p>
        <button onClick={() => setNumber(50)}>Mudar estado</button>
      </div>

      <div className="mt-28">
        {/* E aqui atualiza sempre que clicar armazenando dentro da função o valor  */}
        <p>Contador:{contador}</p>
        <button onClick={() => handleContarClick()}>Contar</button>
      </div>
    </div>
  );
};

export default ManegeData;
