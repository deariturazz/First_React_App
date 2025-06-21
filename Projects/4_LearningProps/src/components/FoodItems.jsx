import Item from "./Item";
const FoodItems = ({ items }) => {
  //let foodItems = ["Apple", "Banana", "Carrot", "Doughnut", "Eggplant"];
  const handleClick = (item) => {
    alert(`${item} clicked`);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          item={item}
          handleClick={() => handleClick(item)}
        />
      ))}
    </ul>
  );
};
export default FoodItems;
