import "./App.css";
import DetailsCars from "./components/DetailsCars";

function App() {
  const cars = [
    {
      id: 1,
      name: "Fusca",
      year: 1970,
      color: "blue",
    },
    {
      id: 2,
      name: "Civic",
      year: 2020,
      color: "black",
    },
    {
      id: 3,
      name: "Corolla",
      year: 2021,
      color: "white",
    },
  ];

  return (
    <>
      <h1>Showroom</h1>
      {cars.map((car) => (
        <DetailsCars key={car.id} car={car} />
      ))}
    </>
  );
}

export default App;
