import { useState } from "react";
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button onClick={decrement} className="button">
        -
      </button>
      <button onClick={reset} className="button">
        Reset
      </button>
      <button onClick={increment} className="button">
        +
      </button>
    </div>
  );
}

export default Counter;
