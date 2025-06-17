import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div id="buttonsContainer" className={styles.buttonsContainer}>
      {buttonList.map((button) => (
        <button key={button} id={button} className={styles.button}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
