import React, { useState } from "react";

const AddTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAddClick = () => {
    //passing state to parent component
    props.onAdd({ name: todo, isComplete: false });
    //clear input
    setTodo("");
  };

  return (
    <div className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={todo}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-default" onClick={handleAddClick}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
