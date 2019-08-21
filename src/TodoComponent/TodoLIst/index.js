import React from "react";
// import "./todoLIstStyle.css";
import TodoRow from "./TodoRow";
import { TodoListContainer } from "./styledComponents.js";
import { inject, observer } from "mobx-react";

@inject("todoStore")
@observer
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  displayTodoList = () => {
    let todoListDisplay = [];
    const todoArray = this.props.todoStore.AppliedFilterList;
    const len = todoArray.length;
    // console.log(len);
    //console.log(todoArray);
    for (var i = 0; i < len; i++) {
      // console.log("mani8");
      const todoItem = (
        <TodoListContainer>
          <TodoRow todoItem={todoArray[i]} />
        </TodoListContainer>
      );
      todoListDisplay.push(todoItem);
      // console.log("mani", todoListDisplay);
    }
    return todoListDisplay;
  };
  render() {
    return <div>{this.displayTodoList()}</div>;
  }
}
export default TodoList;
