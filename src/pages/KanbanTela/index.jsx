import Cards from "../../components/Cards";
import NovoCard from "../../components/NovoCard";
import styles from "./styles.module.css";
import NewTasks from "../../components/NewTasks";
import { useState } from "react";

export default function KanbanBoard() {
  const [editandoCard1, setEditandoCard1] = useState(false);
  const [editandoCard2, setEditandoCard2] = useState(false);
  const [editandoCard3, setEditandoCard3] = useState(false);
  const [lista1, setLista1] = useState([]);
  const [lista2, setLista2] = useState([]);
  const [lista3, setLista3] = useState([]);

  return (
    <div className={styles.Container}>
      <div className={styles.Container2}>
        <div className={styles.cabecalho1}>A Fazer </div>
        <div className={styles.cabecalho2}>Fazendo</div>
        <div className={styles.cabecalho3}>Feito</div>
        <div className={styles.tarefas1}>
          {lista1.map((tarefa) => {
            return <Cards tarefa={tarefa} key={tarefa} />;
          })}
          {editandoCard1 == true ? (
            <NewTasks
              setEditandoCard={setEditandoCard1}
              setListaDeTarefas={setLista1}
            />
          ) : (
            <NovoCard setEditandoCard={setEditandoCard1} />
          )}
        </div>
        <div className={styles.tarefas2}>
          {lista2.map((tarefa) => {
            return <Cards tarefa={tarefa} key={tarefa} />;
          })}
          {editandoCard2 == true ? (
            <NewTasks
              setEditandoCard={setEditandoCard2}
              setListaDeTarefas={setLista2}
            />
          ) : (
            <NovoCard setEditandoCard={setEditandoCard2} />
          )}
        </div>
        <div className={styles.tarefas3}>
          {lista3.map((tarefa) => {
            return <Cards tarefa={tarefa} key={tarefa} />;
          })}
          {editandoCard3 == true ? (
            <NewTasks
              setEditandoCard={setEditandoCard3}
              setListaDeTarefas={setLista3}
            />
          ) : (
            <NovoCard setEditandoCard={setEditandoCard3} />
          )}
        </div>
      </div>
    </div>
  );
}
