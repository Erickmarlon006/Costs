import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  const navigate = useNavigate();
  function createPost(project) {
    project.costs = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate("/projects", {state:{ message: "Projeto criado com sucesso!" }});
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Essa é a página para criar novos projetos</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}
export default NewProject;
