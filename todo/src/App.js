import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
// import TodoListItem from './components/TodoListItem';
import TodoTemplate from "./components/TodoTemplate";

// 컴포넌트 성능 최적화
function createBulkTodo() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// ----

const App = () => {
  // const [todos, setTodos] = useState([
  //   { id: 1, text: '밥먹기', checked: true },
  //   { id: 2, text: '세수하기', checked: true },
  //   { id: 3, text: 'todo-app 완성하기', checked: false },
  // ]);
  const [todos, setTodos] = useState(createBulkTodo);

  // 고유값으로 사용될 id -> ref를 사용하여 변수 담기
  // const nextId = useRef(4);
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // 함수형 업데이트 사용
    // setTodos(todos.concat(todo));
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    // 함수형 업데이트 사용
    // setTodos(todos.filter((todo) => todo.id !== id));
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    // 함수형 업데이트 사용
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
