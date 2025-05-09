import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  const n = 20;
  return (
    <>
      <div className="App">
        {/* CSS GLOBAL */}
        <h1>React com CSS</h1>
        {/* CSS DE COMPONENTE */}
        <MyComponent />
        <p>Esse é o parágraco e do App.jsx</p>
        <p className="my-comp-paragraph">Esse foi feito com classe</p>
        {/* INLINE CSS */}
        <p
          style={{
            color: "blue",
            fontSize: "20px",
            borderTop: "2px solid black",
          }}
        >
          Esse foi feito com inline CSS Esse elemento foi estilizado de forma
          inline
        </p>

        {/* CSS INLINE DINAMICO*/}
        <h2 style={n < 21 ? { color: "purple" } : { color: "yellow" }}>
          CSS dinâmico
        </h2>
      </div>
    </>
  );
}

export default App;
