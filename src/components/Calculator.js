import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { total, next, operation } = this.state;
    return (

      <div className="App">
        <div className="calculator">
          <div className="display">
            { total}
            {operation}
            {next}
          </div>

          <div className="operators">
            <button type="button" className="press-btn">AC</button>
            <button type="button" className="press-btn">+/-</button>
            <button type="button" className="press-btn">%</button>
            <button type="button" className="press-btn amber">÷</button>

            <button type="button" className="press-btn-1">7</button>
            <button type="button" className="press-btn-1">8</button>
            <button type="button" className="press-btn-1">9</button>
            <button type="button" className="press-btn amber">X</button>

            <button type="button" className="press-btn">4</button>
            <button type="button" className="press-btn">5</button>
            <button type="button" className="press-btn">6</button>
            <button type="button" className="press-btn amber">-</button>

            <button type="button" className="press-btn">1</button>
            <button type="button" className="press-btn">2</button>
            <button type="button" className="press-btn">3</button>
            <button type="button" className="press-btn amber">+</button>

            <button type="button" className="press-btn-2">0</button>
            <button type="button" className="press-btn">.</button>
            <button type="button" className="press-btn amber">=</button>
          </div>
        </div>
      </div>

    );
  }
}
export default Calculator;
