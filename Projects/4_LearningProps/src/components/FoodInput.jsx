import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const onChange = (event) => {
    alert(event.target.value);
  };
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
