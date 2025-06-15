function ToDoItem({ TodoItem, TodoDate }) {
  console.log(TodoItem, TodoDate);
  return (
    <div className="container item-container">
      <div className="row app-row">
        <div className="col-6">{TodoItem}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger app-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
