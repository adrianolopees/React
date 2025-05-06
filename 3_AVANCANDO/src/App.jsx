import "./App.css";
import { useState } from "react";
import Morning from "./assets/montanhas.jpg";
import ManegeData from "./components/ManegeData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";

function App() {
  //const name = "Sanmara";
  const [userName] = useState("Maria");
  const cars = [
    { brand: "Renault", color: "Vermelho", km: 1000, newCar: false },
    { brand: "Nissan", color: "Roxo", km: 0, newCar: true },
    { brand: "Jaguar", color: "Azul", km: 104320, newCar: false },
  ];
  return (
    <>
      <h1 className="bg-amber-600">Avançando em React</h1>

      <div>
        <img src="/city.jpg" alt="Cidade a noite" />
      </div>

      <div>
        <img src="../src/assets/img1.jpg" alt="Dia nas montanhas" />
      </div>

      <div className="mb-56">
        <img src={Morning} alt="manha de sol" />
      </div>
      <div className="mb-96">
        <ManegeData />
        <ListRender />
        <ConditionalRender />
        {/* Props */}
        <ShowUserName /* name="Adriano" */ /* name={name} */ name={userName} />
        {/* Destructuring */}
        <CarDetails brand="VW" color="Petro" km={100000} />
        {/* Reaproveitamento */}
        <CarDetails brand="Fiat" color="Azul" km={0} newCar={true} />
        <CarDetails brand="Ferrari" color="Vermelha" km={0} newCar={true} />
        <CarDetails brand="Ford" color="Preto" km={45000} newCar={false} />
        {/* Loop com componentes */}
        {cars.map((car) => (
          <CarDetails
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}

        <Fragment />
      </div>
    </>
  );
}

export default App;
