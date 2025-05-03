const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    alert("clicou");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>;
    } else {
      return <h1>Posso tambem renderizar isso </h1>;
    }
  };
  return (
    <>
      <div>
        <button onClick={handleMyEvent}>Click Aqui!</button>
        <button onClick={() => console.log("Ola mundo")}>Console</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </>
  );
};

export default Events;
