import "./App.css";
import Morning from "./assets/montanhas.jpg";

function App() {
  return (
    <>
      <h1 className="bg-amber-600">Avançando em React</h1>

      <div>
        <img src="/city.jpg" alt="Cidade a noite" />
      </div>

      <div>
        <img src="../src/assets/img1.jpg" alt="Dia nas montanhas" />
      </div>

      <div>
        <img src={Morning} alt="manha de sol" />
      </div>
    </>
  );
}

export default App;
