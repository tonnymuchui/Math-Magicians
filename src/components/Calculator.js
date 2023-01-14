import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickEvent = (event) => {
    const result = calculate(state, event.target.name);
    return setState(result);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {state.total}
          {state.operation}
          {state.next}
        </div>

        <div className="operators">
          <button onClick={clickEvent} name="AC" type="button" className="press-btn">AC</button>
          <button onClick={clickEvent} name="" type="button" className="press-btn">+/-</button>
          <button onClick={clickEvent} name="%" type="button" className="press-btn">%</button>
          <button onClick={clickEvent} name="÷" type="button" className="press-btn amber">÷</button>

          <button onClick={clickEvent} name="7" type="button" className="press-btn-1">7</button>
          <button onClick={clickEvent} name="8" type="button" className="press-btn-1">8</button>
          <button onClick={clickEvent} name="9" type="button" className="press-btn-1">9</button>
          <button onClick={clickEvent} name="x" type="button" className="press-btn amber">X</button>

          <button onClick={clickEvent} name="4" type="button" className="press-btn">4</button>
          <button onClick={clickEvent} name="5" type="button" className="press-btn">5</button>
          <button onClick={clickEvent} name="6" type="button" className="press-btn">6</button>
          <button onClick={clickEvent} name="-" type="button" className="press-btn amber">-</button>

          <button onClick={clickEvent} name="1" type="button" className="press-btn">1</button>
          <button onClick={clickEvent} name="2" type="button" className="press-btn">2</button>
          <button onClick={clickEvent} name="3" type="button" className="press-btn">3</button>
          <button onClick={clickEvent} name="+" type="button" className="press-btn amber">+</button>

          <button onClick={clickEvent} name="0" type="button" className="press-btn-2">0</button>
          <button onClick={clickEvent} name="." type="button" className="press-btn">.</button>
          <button onClick={clickEvent} name="=" type="button" className="press-btn amber">=</button>
        </div>
      </div>
    </div>

  );
};
export default Calculator;
