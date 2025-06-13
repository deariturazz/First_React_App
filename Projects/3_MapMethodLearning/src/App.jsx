import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Apple", "Banana", "Carrot", "Doughnut", "Eggplant"];
  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {/* {foodItems.map((item) => (
          <li className="list-group-item">{item}</li>
        ))} */}
        {foodItems.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
