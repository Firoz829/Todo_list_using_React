import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([]);
  // console.log(input);
  const addTodoList = () => {
    if (input.trim() === "") return;
    const item = {
      id: todolist.length + 1,
      text: input.trim(),
      completed: false,
    };
    setTodolist((prev) => [...prev, item]);
    setInput("");
  };

  const toggleCompleted = (id) => {
    setTodolist(
      todolist.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  const deleteTodo = (id) => {
    setTodolist(todolist.filter((e) => e.id !== id));
  };
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <input
        className="input"
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="addbtn" onClick={() => addTodoList()}>
        Add
      </button>
      <h2>Task List</h2>
      <ul>
        {todolist.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />
            <span className={t.completed ? "strickThrough" : ""}>{t.text}</span>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
