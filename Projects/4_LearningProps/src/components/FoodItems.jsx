import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ items }) => {
  let [bought, setBought] = useState([]);

  const handleBought = (item, event) => {
    const newItems = [...bought, item];
    setBought(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          item={item}
          bought={bought.includes(item)}
          handleClick={() => handleBought(item)}
        />
      ))}
    </ul>
  );
};
export default FoodItems;
