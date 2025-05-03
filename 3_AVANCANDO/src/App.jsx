import "./App.css";
import Morning from "./assets/montanhas.jpg";
import ManegeData from "./components/ManegeData";

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

      <div className="mb-56">
        <img src={Morning} alt="manha de sol" />
      </div>
      <div className="mb-96">
        <ManegeData></ManegeData>
      </div>
    </>
  );
}

export default App;
