// 1. React e hooks
import { useState } from "react";

// 2. Estilos
import "./App.css";

// 3. Assets
import Morning from "./assets/montanhas.jpg";

// 4. Componentes locais
import ManegeData from "./components/ManegeData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";
import UserDetails from "./components/UserDetails";

function App() {
  //const name = "Sanmara";
  const [userName] = useState("Maria");
  const cars = [
    { id: 1, brand: "Renault", color: "Vermelho", km: 1000, newCar: false },
    { id: 2, brand: "Nissan", color: "Roxo", km: 0, newCar: true },
    { id: 3, brand: "Jaguar", color: "Azul", km: 104320, newCar: false },
  ];

  function ShowMassage() {
    console.log("Função passada como props");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "Adriano", age: 29, job: "Vendedor" },
    { id: 2, name: "Sanmara", age: 39, job: "Confeiteira" },
    { id: 3, name: "João", age: 60, job: "Metalurgico" },
    { id: 4, name: "Miguel", age: 16, job: "Estudante" },
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
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
        <Fragment />

        {/* Children prop  */}
        <Container className="mt-3">
          <h2>Olá mundo!</h2>
          <p>Esse conteudo esta dentro do container</p>
        </Container>

        <Container className="mt-3">
          <h2>Esse é o reaproveitamento comn children</h2>
          <p>conteudo reutilizando o mesmo componente</p>
        </Container>
        {/* Passando função como props */}
        <ExecuteFunction MyFunction={ShowMassage} />

        {/* State Lift */}
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage} />

        {/* Desafio  */}
        {users.map((user) => (
          <UserDetails
            key={user.id}
            name={user.name}
            age={user.age}
            job={user.job}
          />
        ))}
      </div>
    </>
  );
}

export default App;
