import Card from "./Card";
import Button from './Button'
import Student from "./Student";

function App() {
  return (
    <div>
      <Student name='suhail' age={22} isStudent = {true}></Student>
      <Student name="Akshay Kumar" age={22} isStudent = {false}></Student>
      <Student name="Abhinav ak" age={22} isStudent = {true}></Student>
      <Student name="Ajaml ea" age={22} isStudent = {false}></Student>
    </div>
  );
}

export default App;
