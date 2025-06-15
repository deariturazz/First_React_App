import "./App.css";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItem TodoItem="Buy grocceries" TodoDate="15/06/2025"></ToDoItem>
      <ToDoItem TodoItem="Clean the house" TodoDate="15/06/2025"></ToDoItem>
    </center>
  );
}

export default App;
