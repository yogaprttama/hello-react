const Todo = (props) => {
  const deleteClick = () => {
    props.deleteClick(props.name);
  };

  const checklistClick = (event) => {
    props.completeClick({ name: props.name, isComplete: event.target.checked });
  };

  return (
    <div className="container form-group">
      <input
        type="checkbox"
        onChange={checklistClick}
        className="form-group pull-left"
        style={{ marginTop: "12px", marginRight: "5px" }}
      />

      <div
        className="pull-left"
        style={{
          textDecoration: props.isComplete ? "line-through" : "none",
          marginTop: "8px"
        }}
      >
        {props.name}
      </div>

      <button
        type="button"
        className="btn btn-default pull-right"
        onClick={deleteClick}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
