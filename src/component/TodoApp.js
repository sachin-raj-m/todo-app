import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };

  deleteItems = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  render() {
    const { input, items } = this.state;
    let today = new Date();
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo's</h1>
          <h4>
            It's {today.toLocaleString()}
          </h4>
          <input
            type="textarea"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter Items....."
          ></input>
          <i
            className="fas fa-2x fa-plus"
            style={{ cursor: "pointer" }}
            onClick={this.storeItems}
          ></i>
        </form>
        <div className="item-container">
          <ul>
            {items.map((values, index) => (
              <li key={index}>
                {index + 1}. {values}
                <i
                  className="far fa-trash-alt"
                  onClick={() => this.deleteItems(index)}
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
