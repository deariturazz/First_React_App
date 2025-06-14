import styles from "./Items.module.css";

const Item = (props) => {
  console.log(styles);
  return (
    <li className={`${styles.item} list-group-item`}>
      <span className={styles.span}>{props.foodItem}</span>
    </li>
  );
};
export default Item;
