import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (newTodo) => {
    //Add Todo = Previous state + new state
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (name) => {
    //filter todos
    let newTodos = todos.filter((todo) => todo.name !== name);
    setTodos(newTodos);
  };

  const handleComplete = (payload) => {
    let newTodos = todos.map((todo) =>
      todo.name !== payload.name ? todo : payload
    );
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>TODO</h1>
      <AddTodo onAdd={handleAdd} />
      {todos.length > 0 && (
        <Todos
          todos={todos}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default App;
