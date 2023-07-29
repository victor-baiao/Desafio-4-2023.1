import { useState } from "react";
import styles from "../NewTasks/styles.module.css";
import perfil from "../../assets/perfil.png";
import calendario from "../../assets/calendario.png";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

export default function NewTasks({ setEditandoCard, setListaDeTarefas }) {
  const [fazer, setFazer] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const tarefa = {
      titulo: fazer,
      responsavel: responsavel,
      prazo: data,
      descricao: descricao,
    };

    setFazer("");
    setResponsavel("");
    setData("");
    setDescricao("");

    setEditandoCard(false);

    setListaDeTarefas((listaAntiga) => {
      return [...listaAntiga, tarefa];
    });
  }

  function handleReset(event) {
    event.preventDefault();

    setFazer("");
    setResponsavel("");
    setData("");
    setDescricao("");
  }

  return (
    <div className={styles.NovaTarefa}>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className={styles.TaskSon1}>
          <input
            id="fazer"
            type="text"
            placeholder="Fazer"
            value={fazer}
            onChange={(event) => {
              setFazer(event.target.value);
            }}
          ></input>
        </div>
        <div className={styles.TaskSon2}>
          <img src={perfil} />
          <input
            id="responsavel"
            type="text"
            placeholder="Responsável"
            value={responsavel}
            onChange={(event) => {
              setResponsavel(event.target.value);
            }}
          ></input>
          <img src={calendario} />
          <input
            id="data"
            style={{ opacity: "0.5", color: "white" }}
            type="datetime-local"
            placeholder="dd/mm/yyyy"
            value={data}
            onChange={(event) => {
              setData(event.target.value);
            }}
          ></input>
        </div>
        <div className={styles.TaskSon3}>
          <textarea
            id="descricao"
            placeholder="Descrição"
            value={descricao}
            onChange={(event) => {
              setDescricao(event.target.value);
            }}
          />
        </div>
        <div className={styles.TaskSon4}>
          <button
            type="reset"
            onClick={() => {
              setEditandoCard(false);
            }}
          >
            <ClearIcon />
          </button>
        </div>
        <div className={styles.TaskSon5}>
          <button type="submit">
            <CheckIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
