import Tarea from "./Task";

type ListaProps = {
  listaTareas: string[];
  borrarTarea: (index:number) => void
}

const ListaTareas = ({listaTareas, borrarTarea}: ListaProps) => {
  return (
    <div className="taskList">
      {
        listaTareas.map((task, index) => (
          <Tarea key={index} task={task} borrarTarea={() => borrarTarea(index)}></Tarea>
        ))
      }
    </div>
  )
}
export default ListaTareas