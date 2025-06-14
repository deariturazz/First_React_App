import Item from "./Item";
const FoodItems = ({ items }) => {
  //let foodItems = ["Apple", "Banana", "Carrot", "Doughnut", "Eggplant"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} item={item} />
      ))}
    </ul>
  );
};
export default FoodItems;
