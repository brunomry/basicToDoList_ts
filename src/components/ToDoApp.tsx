import { useState } from "react";
import TaskList from "./TaskList";

const ToDoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleAddTask = () => {
    setTaskList((previousTasks) => [...previousTasks, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index: number) => {
    setTaskList((tasks) => tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}> AGREGAR TAREA</button>
      </div>
      <TaskList taskList={taskList} deleteTask={handleDeleteTask}></TaskList>
    </div>
  );
};

export default ToDoApp;
