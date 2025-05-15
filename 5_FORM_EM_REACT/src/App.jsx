import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      <div className="App">
        <h2>Forms</h2>
        <MyForm
          user={{
            name: "Adriano",
            email: "adriano@gmail.com",
            bio: "Sou Gerente",
            role: "admin",
          }}
        />
      </div>
    </>
  );
}

export default App;
