import React from "react";
// import "./todoLIstStyle.css";
import TodoRow from "./TodoRow";
import { TodoListContainer } from "./styledComponents.js";
import { inject } from "mobx-react";

@inject("todoStore")
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  /*handleUpdate = todoEachItemId => {
    //console.log("TL");
    this.props.onTodoChange(todoEachItemId);
  };*/
  /*handleChangeEdit = (todoItemId, todoDescriptionEditId) => {
    this.props.onTodoEditChange(todoItemId, todoDescriptionEditId);
  };*/
  /*handleCloseChange = todoCloseItemId => {
    this.props.onTodoCloseChange(todoCloseItemId);
  };*/
  displayTodoList = () => {
    let todoListDisplay = [];
    const todoArray = this.props.todoStore.getAppliedFilterList;
    const len = todoArray.length;
    //console.log(todoArray);
    for (var i = 0; i < len; i++) {
      const todoItem = (
        <TodoListContainer>
          <TodoRow todoItem={todoArray[i]} />
        </TodoListContainer>
      );
      todoListDisplay.push(todoItem);
    }
    return todoListDisplay;
  };
  render() {
    return <div>{this.displayTodoList()}</div>;
  }
}
export default TodoList;
