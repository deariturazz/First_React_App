import styles from "./App.module.css";
import Display from "./components/Display";
function App() {
  return (
    <div id="cal" className={styles.calculator}>
      <Display />
      <div id="buttonsContainer" className={styles.buttonsContainer}>
        <button id="clear" className={styles.button}>
          C
        </button>
        <button id="1" className={styles.button}>
          1
        </button>
        <button id="2" className={styles.button}>
          2
        </button>
      </div>
    </div>
  );
}

export default App;
