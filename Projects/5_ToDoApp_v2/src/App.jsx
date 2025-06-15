import "./App.css";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/ToDoItems";
function App() {
  let todoList = [
    { item: "Buy groceries", date: "15/06/2025" },
    { item: "Clean the house", date: "15/06/2025" },
    { item: "Finish project", date: "15/06/2025" },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <TodoItems toDoItemList={todoList} />
    </center>
  );
}

export default App;
