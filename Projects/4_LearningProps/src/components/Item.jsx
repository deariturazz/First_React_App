import styles from "./Items.module.css";

const Item = ({ foodItem, handleClick }) => {
  return (
    <li className={`${styles.item} list list-group-item`}>
      <span className={styles.span}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`} onClick={handleClick}>
        Buy
      </button>
    </li>
  );
};
export default Item;
