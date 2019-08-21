import React from "react";
import {
  TodoInputContainer,
  TodoInputTextImage,
  TodoInputBox
} from "./styledComponents.js";
import { inject } from "mobx-react";
@inject("todoStore")
class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  handleKeyDown = event => {
    if (event.key === "Enter") {
      if (this.state.name === "") {
      } else {
        this.props.todoStore.addTodo(this.state.name);
        this.setState({ name: "" });
      }
    }
  };
  render() {
    return (
      <TodoInputContainer>
        <TodoInputTextImage src="indexInput.png" />
        <TodoInputBox
          placeholder="What needs to be done?"
          value={this.state.name}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </TodoInputContainer>
    );
  }
}
export default TodoInput;
