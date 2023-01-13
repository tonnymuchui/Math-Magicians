import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    this.setState((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
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
            <button onClick={this.clickEvent} name="AC" type="button" className="press-btn">AC</button>
            <button onClick={this.clickEvent} name="" type="button" className="press-btn">+/-</button>
            <button onClick={this.clickEvent} name="%" type="button" className="press-btn">%</button>
            <button onClick={this.clickEvent} name="÷" type="button" className="press-btn amber">÷</button>

            <button onClick={this.clickEvent} name="7" type="button" className="press-btn-1">7</button>
            <button onClick={this.clickEvent} name="8" type="button" className="press-btn-1">8</button>
            <button onClick={this.clickEvent} name="9" type="button" className="press-btn-1">9</button>
            <button onClick={this.clickEvent} name="x" type="button" className="press-btn amber">X</button>

            <button onClick={this.clickEvent} name="4" type="button" className="press-btn">4</button>
            <button onClick={this.clickEvent} name="5" type="button" className="press-btn">5</button>
            <button onClick={this.clickEvent} name="6" type="button" className="press-btn">6</button>
            <button onClick={this.clickEvent} name="-" type="button" className="press-btn amber">-</button>

            <button onClick={this.clickEvent} name="1" type="button" className="press-btn">1</button>
            <button onClick={this.clickEvent} name="2" type="button" className="press-btn">2</button>
            <button onClick={this.clickEvent} name="3" type="button" className="press-btn">3</button>
            <button onClick={this.clickEvent} name="+" type="button" className="press-btn amber">+</button>

            <button onClick={this.clickEvent} name="0" type="button" className="press-btn-2">0</button>
            <button onClick={this.clickEvent} name="." type="button" className="press-btn">.</button>
            <button onClick={this.clickEvent} name="=" type="button" className="press-btn amber">=</button>
          </div>
        </div>
      </div>

    );
  }
}
export default Calculator;
