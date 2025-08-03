import React, { Component } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      message: "",
      syntheticMsg: "",
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleSynthetic = this.handleSynthetic.bind(this);
  }

  // --- Event Handlers ---
  handleIncrement = () => {
    this.incrementValue();
    this.sayHello();
  };

  incrementValue = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  sayHello = () => {
    this.setState({ message: "Hello! Incremented and greeted." });
  };

  handleDecrement() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
      message: "Value decremented.",
    }));
  }

  handleWelcome = (msg) => {
    this.setState({ message: `Welcome, ${msg}!` });
  };

  handleSynthetic(e) {
    // SyntheticEvent demo
    this.setState({ syntheticMsg: "I was clicked" });
    setTimeout(() => this.setState({ syntheticMsg: "" }), 1200);
  }

  render() {
    const { counter, message, syntheticMsg } = this.state;
    return (
      <div className="main-container">
        <h1>Event Examples App</h1>
        <div className="event-panel">
          <div className="counter-row">
            <span className="counter-value">{counter}</span>
            <div className="counter-btns">
              <button onClick={this.handleIncrement}>Increment</button>
              <button onClick={this.handleDecrement}>Decrement</button>
            </div>
          </div>
          <div className="action-btns">
            <button onClick={() => this.handleWelcome("welcome")}>Say Welcome</button>
            <button onClick={this.handleSynthetic}>Click on me</button>
          </div>
          <div className="panel-message">
            {message}
            {syntheticMsg && (
              <div style={{ marginTop: 5, color: "#17604e", fontWeight: 600 }}>
                {syntheticMsg}
              </div>
            )}
          </div>
        </div>
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
