type Props = {
  task: string;
  deleteTask: () => void;
};

const Task = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={deleteTask}>Borrar</button>
    </div>
  );
};

export default Task;
