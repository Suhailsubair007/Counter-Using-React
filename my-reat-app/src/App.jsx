import UserGreeting from "./assets/UserGreeting";
import Tick from "./Tick";
import List from "./List"
import './App.css';
import Button from "./Button"

function App() {
  const fruits = [
    { id: 1, name: "Apple", calorie:54 },
    { id: 2, name: "Orange", calorie: 77 },
    { id: 3, name: "Banana", calorie: 12 },
    { id: 4, name: "Pineapple", calorie: 87 },
    { id: 5, name: "Mango", calorie: 39 },
  ];

  const vegetables = [
    { id: 6, name: "Potato", calorie: 23 },
    { id: 7, name: "Tomato", calorie: 77 },
    { id: 8, name: "Brinjal", calorie: 12 },
    { id: 9, name: "Chilli", calorie: 87 },
    { id: 10, name: "Ladies Finger", calorie: 39 },
  ];

  return (
    <>
      {/* <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" /> */}
      <Button/>
    </>
  );
}

export default App;
