import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  style = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   console.log(this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadge()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    console.log("handling increment click", this);
    //obj.method();
    // function();
  };

  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
