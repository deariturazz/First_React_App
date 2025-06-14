const ErrorMessage = ({ items }) => {
  //let foodItems = []; // ["Apple", "Banana", "Carrot", "Doughnut", "Eggplant"];
  return <>{items.length === 0 ? <h3>I am still hungary</h3> : null}</>;
};
export default ErrorMessage;
