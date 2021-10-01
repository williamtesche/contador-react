import React from "react";
import { useState } from "react";
import "../src/App.css";

export default function App() {
  const [number, setNumber] = useState(0);

  function less() {
    setNumber(number - 1);
  }

  function plus() {
    setNumber(number + 1);
  }

  return (
    <>
      <div className="container">
        <div className="inner-container">
          <h1>COUNTER</h1>
          <button onClick={less}>diminuir</button>
          <span>{number}</span>
          <button onClick={plus}>almentar</button>
        </div>
      </div>
    </>
  );
}
