function ToDoItem2() {
  let TodoItem = "Clean the House";
  let TodoDate = "11/06/2025";
  return (
    <div className="container">
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

export default ToDoItem2;
