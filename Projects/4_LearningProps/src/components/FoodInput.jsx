import styles from "./FoodInput.module.css";
const FoodInput = ({ onChange }) => {
  return (
    <input
      type="text"
      className={styles.foodinput}
      placeholder="Enter food items here"
      onKeyDown={onChange}
      id="foodinput"
    ></input>
  );
};

export default FoodInput;
