import { createContext } from "react";

import { tasks as data } from "../data/tasks";

import { useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    //El ... sirve oara copiar todos los elementos de un arreglo

    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.descripcion,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
