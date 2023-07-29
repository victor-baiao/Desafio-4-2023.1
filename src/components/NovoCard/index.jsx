import styles from "./styles.module.css";

export default function NovoCard({ setEditandoCard }) {
  return (
    <div className={styles.adicionar}>
      <button
        type="button"
        onClick={() => {
          setEditandoCard(true);
        }}
      >
        +
      </button>
    </div>
  );
}
