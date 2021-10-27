import React from "react";
import { useState } from "react";
import "../src/App.css";

export default function App() {
  const [number, setNumber] = useState(0);

  function less() {
    setNumber(number - 1)
  }

  function plus() {
    setNumber(number + 1)
  }
  function reset () {
    setNumber(0)
  }

  return (
    <>
      <div className="container">
        <div className="inner-container">
          <h1>COUNTER</h1>

          <span id="n">{number}</span>
          <br />
          <button className="button1" onClick={less}>
            diminuir {number - 1}
          </button>
          <button className="button2" onClick={plus}>
            aumentar {number + 1}
          </button>
          <button className="button2" onClick={reset}>
            Zerar 0
          </button>
        </div>
      </div>
    </>
  );
}
