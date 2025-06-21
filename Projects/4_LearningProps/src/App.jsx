import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Apple", "Banana", "Carrot", "Doughnut", "Eggplant"];
  const onChange = (event) => {
    alert(event.target.value);
  };
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput onChange={onChange}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>The above list items are good for your health</p>
      </Container>
    </>
  );
}

export default App;
