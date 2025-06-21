import styles from "./FoodInput.module.css";
const FoodInput = ({ onChange }) => {
  return (
    <input
      type="text"
      className={styles.foodinput}
      placeholder="Enter food items here"
      onChange={onChange}
    ></input>
  );
};

export default FoodInput;
