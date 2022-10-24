import './App.css';
import {useState, useEffect} from 'react'
import {Bstrash, BsBookmarkCheck,BsBookmarkCheckFill } from "react";


const API = "http://localhost:3000/";
function App() {
const [title, setTitle] = useState ("");
const [time, setTime] = useState ("");
const [tarefaarmando,setTodos] = useState ([]);
const [loading, setLoading] = useState(false);


const handleSubmit = (e) => {
   e.preventDefault();

  console.log(title);

  setTitle("");

   console.log("Enviou!");
};
return (
<div className="App">
<div className="tarefaarmando-header">
<h1>Cadastro</h1>
<div className="form-tarefaarmando">
  <h2>Insira a sua proxima tarefa:</h2>

  <div className="form-control">
    <labe htmlFor="title">o que voce vai fazer? </labe>
    <input type="text"
     name="title" placeholder="titulo da tarefa" 
    onChange={(e) => setTitle(e.target.value)}
    value={title || ""}
    required
    /> 
  </div>
  <div className="form-control">
    <labe htmlFor="time">duração</labe>
    <input type="text"
     name="time" placeholder="tempo estimado (em horas)" 
    onChange={(e) => setTitle(e.target.value)}
    value={time || ""}
    required
    /> 
  </div>
  <form onSubmit={handleSubmit}>
  <input type="submit" value="Criar" />
  </form>
</div>
<div className="list-tarefaarmando">
<h2>Lista de tarefas:</h2>
{tarefaarmando.length=== 0 && <p>Não há tarefas!</p>}

</div>
</div>
</div>

);
}
export default App;