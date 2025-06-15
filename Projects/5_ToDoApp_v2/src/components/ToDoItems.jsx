import ToDoItem from "./ToDoItem";
const TodoItems = ({ toDoItemList }) => {
  //console.log(toDoItemList);
  return (
    <div className="item-container">
      {toDoItemList.map((item) => (
        <ToDoItem
          key={item.item}
          TodoItem={item.item}
          TodoDate={item.date}
        ></ToDoItem>
      ))}
    </div>
  );
};
export default TodoItems;
