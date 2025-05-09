import styles from "./Details.module.css";

const DetailsCars = ({ name, year, color }) => {
  return (
    <div className={styles.container_details}>
      <h2 className={styles.title_main}>Detalhes do Carro</h2>
      <p>Nome: {name}</p>
      <p>Ano: {year}</p>
      <p>Cor: {color}</p>
      <button>Editar</button>
      <button>Excluir</button>
    </div>
  );
};

export default DetailsCars;
