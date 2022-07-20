import "./Task.css";

function Task(props, handleTaskClick) {
  return (
    <div className="taskContainer">
      <li
        className={props.completed ? "completa" : ""}
        onClick={() => props.handleTaskClick(props.id)}
      >
        {props.title}
      </li>
      <button onClick={() => props.removeTask(props.id)}>X</button>
    </div>
  );
}

export default Task;
