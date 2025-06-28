import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1>This is my first react mini project</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue}>Increase Value</button> <br />
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
