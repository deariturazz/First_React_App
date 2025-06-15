function AddToDo() {
  return (
    <div className="container">
      <div className="row app-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2 item-container">
          <button className="btn btn-success app-button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
