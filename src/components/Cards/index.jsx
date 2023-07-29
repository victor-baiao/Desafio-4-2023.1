import calendario from "../../assets/calendario.png";
import styles from "./styles.module.css";

export default function Cards({ tarefa }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardSon1}>{tarefa.titulo}</div>
      <div className={styles.cardSon2}>
        <img
          src={
            "https://robohash.org/" + tarefa.responsavel + "?set=set5&bgset=bg1"
          }
        />
        <p>{tarefa.responsavel}</p>
        <img
          style={{ borderRadius: 0, height: "20px", width: "20px" }}
          src={calendario}
        />
        <p>{tarefa.prazo}</p>
      </div>
      <div className={styles.cardSon3}>
        <p>{tarefa.descricao}</p>
      </div>
    </div>
  );
}
