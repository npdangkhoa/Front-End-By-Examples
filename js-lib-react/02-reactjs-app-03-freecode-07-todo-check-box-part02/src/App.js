import React from "react";
import "./App.css";
import TodosData from "./Component/TodosData";
import TodoItem from "./Component/TodoItem";
// #1
class App extends React.Component {
  constructor() {
    super();
    this.state = { todo: TodosData };
  }

  render() {
    const todoItemRender = this.state.todo.map(todo => (
      <TodoItem key={todo.id} item={todo} />
    ));

    return <div>{todoItemRender}</div>;
  }
}

export default App;
