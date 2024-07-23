type TaskProps = {
  task: string;
  borrarTarea: () => void
}

const Tarea = ({task, borrarTarea}: TaskProps) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={borrarTarea}>borrar</button>
    </div>
  )
}
export default Tarea