const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2 className="text-amber-800 font-bold">Detalhes do Carro</h2>
      <ul className="text-3xl ">
        <li>Marca:{brand}</li>
        <li>KM:{km}</li>
        <li>Cor:{color}</li>
      </ul>
      {newCar && <p>Esse carro é novo</p>}
    </div>
  );
};

export default CarDetails;
