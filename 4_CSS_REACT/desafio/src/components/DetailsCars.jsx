import styles from "./Details.module.css";

const DetailsCars = ({ car }) => {
  return (
    <div className={styles.container_details}>
      <h2 className={styles.title_main}>Detalhes do Carro</h2>
      <p>Nome: {car.name}</p>
      <p>Ano: {car.year}</p>
      <p>Cor: {car.color}</p>
      <button>Editar</button>
      <button>Excluir</button>
    </div>
  );
};

export default DetailsCars;
