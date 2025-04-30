const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    alert("clicou");
  };
  return (
    <>
      <div>
        <button onClick={handleMyEvent}>Click Aqui!</button>
      </div>
    </>
  );
};

export default Events;
