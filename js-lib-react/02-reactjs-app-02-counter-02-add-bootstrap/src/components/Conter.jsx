import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  style = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    return (
      <div>
        <span style={this.style} class="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }

  increase() {
    let { count } = this.state;
    count += 1;
    return count;
  }
}

export default Counter;
