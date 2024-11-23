import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/store";
import { addTasks } from "./redux/tasksSlice";
import { useState } from "react";

function App() {
  const [task, setTask] = useState<string>("");
  console.log(task);

  const tasks = useSelector((state: RootState) => state.tasks.todos);
  console.log(tasks);

  const dispatch = useDispatch();

  const handleAddTasks = () => {
    if (task) {
      dispatch(addTasks(task));
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTasks}>Add tasks</button>

      {tasks.map((item) => (
        <p key={item.id}>{item.todo}</p>
      ))}
    </div>
  );
}

export default App;
