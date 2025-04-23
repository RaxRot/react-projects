import './App.css';
import Input from "./Input.jsx";
import Board from "./Board.jsx";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
      <div className="todo-wrapper">
        <h1>My Todo</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
        <div>
          {taskList.map((task, index) => (
              <Board
                  key={index}
                  index={index}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList}
              />
          ))}
        </div>
      </div>
  );
}

export default App;
