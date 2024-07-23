import { useState } from "react";
import ListaTareas from "./ListaTareas";

const TodoApp = () => {
	const [newTask, setNewTask] = useState<string>("");
	const [lista, setLista] = useState<string[]>([]);

  const handleBorrarTarea = (index: number) => {
    lista.splice(index,1)
    setLista([...lista])
  }
	const handleAgregar = () => {
    setLista([...lista, newTask])
    setNewTask("");
  };
  console.log(lista)
	return (
		<div>
			<h1>Lista de tareas</h1>
			<div>
				<input
					type="text"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
					placeholder="Nueva tarea"
				/>
				<button onClick={handleAgregar}>Agregar tarea</button>
			</div>
      <ListaTareas listaTareas={lista} borrarTarea={handleBorrarTarea}/>
		</div>
	);
};
export default TodoApp;
