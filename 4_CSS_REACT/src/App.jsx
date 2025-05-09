import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <>
      <div className="App">
        {/* CSS GLOBAL */}
        <h1>React com CSS</h1>
        {/* CSS DE COMPONENTE */}
        <MyComponent />
        <p>Esse é o parágraco e do App.jsx</p>
        <p className="my-comp-paragraph">Esse foi feito com classe</p>
      </div>
    </>
  );
}

export default App;
