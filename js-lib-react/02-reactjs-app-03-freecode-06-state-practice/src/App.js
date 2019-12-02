import React from "react";
import "./App.css";
import ProductComponent from "./Component/ProductComponent";
import ProductData from "./Component/vsschoolProduct";
// #1
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Sam",
      age: "13"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    );
  }
}

export default App;
