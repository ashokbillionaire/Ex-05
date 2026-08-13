import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">Counter App</h1>
        
        <div className="counter-display">
          <p className="counter-label">Current Count</p>
          <p className="counter-value">{count}</p>
        </div>

        <div className="button-group">
          <button 
            onClick={decrement}
            className="btn btn-decrement"
            aria-label="Decrease count"
          >
            −
          </button>
          <button 
            onClick={increment}
            className="btn btn-increment"
            aria-label="Increase count"
          >
            +
          </button>
        </div>

        <button 
          onClick={reset}
          className="btn btn-reset"
          aria-label="Reset count"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
