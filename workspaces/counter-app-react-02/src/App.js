import React from "react";
import "./App.css";
import TodosData from "./Component/TodosData";
import TodoItem from "./Component/TodoItem";
// #1
class App extends React.Component {
  constructor() {
    super();
    this.state = { todo: TodosData };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(preState => {
      const updateTodo = preState.todo.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return { todo: updateTodo };
    });
    console.log("change: " + id);
  }

  render() {
    const todoItemRender = this.state.todo.map(todo => (
      <TodoItem key={todo.id} item={todo} handleChange={this.handleChange} />
    ));

    return <div>{todoItemRender}</div>;
  }
}

export default App;
