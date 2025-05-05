import "./App.css";
import Morning from "./assets/montanhas.jpg";
import ManegeData from "./components/ManegeData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";

function App() {
  const name = "Sanmara";
  const [userName] = useState("Maria");
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
        <ShowUserName /* name="Adriano" */ /* name={name} */ name={userName} />
      </div>
    </>
  );
}

export default App;
