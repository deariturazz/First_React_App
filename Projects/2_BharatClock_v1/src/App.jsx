import "./App.css";
import ClockBody from "./Components/ClockBody";
import ClockHeading from "./Components/ClockHeading";
import CurrentTime from "./Components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center className="App">
      <ClockHeading />
      <ClockBody />
      <CurrentTime />
    </center>
  );
}

export default App;
