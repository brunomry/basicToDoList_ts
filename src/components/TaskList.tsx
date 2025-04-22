import Task from "./Task";

type Props = {
  taskList: string[];
  deleteTask: (index: number) => void;
};

const TaskList = ({ taskList, deleteTask }: Props) => {
  return (
    <div className="tasklist">
      {taskList.map((task, index) => (
        <Task
          key={index}
          task={task}
          deleteTask={() => deleteTask(index)}
        ></Task>
      ))}
    </div>
  );
};

export default TaskList;
