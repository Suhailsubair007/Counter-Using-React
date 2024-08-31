import { useState } from "react";

function Mycomponet() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setStatus] = useState(false);

  const updateName = () => {
    setName("suhail");
  };
  const updateAge = () => {
    setAge(age + 1);
  };
  const updateEmployStatus = () => {
    setStatus(!isEmployed);
  };

  return (
    <>
      <p>Name : {name}</p>
      <br />
      <button onClick={updateName}>Click to update the name</button>

      <p>Age : {age}</p>
      <br />
      <button onClick={updateAge}>Click to increment the age by 1</button>

      <p>Employee Status : {isEmployed ? "Yes" : "No"} </p>
      <br />
      <button onClick={updateEmployStatus}>
        click to show the employ status
      </button>
    </>
  );
}

export default Mycomponet;
