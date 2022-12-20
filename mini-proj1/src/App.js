import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./TodoBoard";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todoList, setTodoLIst] = useState([]);
  const addTodo = () => {
    console.log(inputTodo);
    setTodoLIst([...todoList, inputTodo]);
  };

  return (
    <main>
      <input
        value={inputTodo}
        type="text"
        onChange={(event) => setInputTodo(event.target.value)}
      />
      <button onClick={addTodo}>추가</button>

      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
