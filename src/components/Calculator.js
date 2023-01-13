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

      <div className="app">
        <div className="calculator">
          <div className="display">
            { total}
            {operation}
            {next}
          </div>
          <div className="operators">
            <button type="button" color="primary" value="">&#247;</button>
            <button type="button" color="primary" value="">&times;</button>
            <button type="button" color="primary" value="">-</button>
            <button type="button" color="primary" value="">+</button>
            <button type="button" color="primary" value="">=</button>
          </div>

          <div className="numbers">
            <button type="button" color="primary" name="AC">AC</button>
            <button type="button" color="primary" name="">+/-</button>
            <button type="button" color="primary" name="">%</button>
            <button type="button" color="primary" name="2">2</button>
            <button type="button" color="primary" name="3">3</button>
            <button type="button" color="primary" name="4">4</button>
            <button type="button" color="primary" name="5">5</button>
            <button type="button" color="primary" name="6">6</button>
            <button type="button" color="primary" name="7">7</button>
            <button type="button" color="primary" name="8">8</button>
            <button type="button" color="primary" name="9">9</button>
            <button type="button" color="primary" name="0">0</button>
            <button type="button" color="primary" name=".">.</button>
          </div>
        </div>
      </div>

    );
  }
}
export default Calculator;
