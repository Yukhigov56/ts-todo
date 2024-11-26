import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/store";
import { addTasks, removeTasks } from "./redux/tasksSlice";
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

  const handleRemoveTasks = (id: number) => {
    dispatch(removeTasks(id));
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
        <div>
          <p key={item.id}>
            {item.todo}
            <button onClick={() => {handleRemoveTasks(item.id);}}>Удалить</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
