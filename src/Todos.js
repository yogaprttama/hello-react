import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="todos-component">
      <hr />
      {props.todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            name={todo.name}
            isComplete={todo.isComplete}
            deleteClick={props.onDelete}
            completeClick={props.onComplete}
          />
        );
      })}
    </div>
  );
};

export default Todos;
