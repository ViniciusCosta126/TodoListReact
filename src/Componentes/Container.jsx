import { useEffect, useState } from "react";
import Task from "./Task.jsx";
import Addtask from "./AddTask.jsx";
import "./Container.css";

function Container() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
  ]);

  const addTask = (texto) => {
    var newTask = {
      id: tasks.length + 2,
      title: texto,
      completed: false,
    };
    if (texto !== "") {
      setTasks([...tasks, newTask]);
    } else {
      return alert("Input nao pode ser vazio");
    }
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };
  
  const removeTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  
  return (
    <div>
      <Addtask addTask={addTask} />
      <ul>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              handleTaskClick={handleTaskClick}
              removeTask = {removeTask}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Container;
