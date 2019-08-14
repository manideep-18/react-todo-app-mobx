import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoLIst";
import TodoButtonComponent from "./TodoButtonComponent";
// import "./style.css";
import {
  TodoMainComponent,
  TodoText,
  TodoAllComponentsContainer
} from "./styledComponents.js";

class TodoComponent extends React.Component {
  render() {
    return (
      <TodoMainComponent>
        <TodoText>todos</TodoText>
        <TodoAllComponentsContainer>
          <TodoInput
            inputText={this.state.input}
            onEnterChange={this.handleEnterChange}
          />
          <TodoList
            todoArray={this.getTodos()}
            onTodoChange={this.handleTodoChange}
            onTodoCloseChange={this.handleCloseChange}
            onTodoEditChange={this.handleEditChange}
          />
          <TodoButtonComponent
            listType={this.state.todoListType}
            todoArray={this.state.todoArray}
            onTodoListTypeChange={this.handleTodo}
            onClearCompletedChange={this.handleClearCompletedChange}
          />
        </TodoAllComponentsContainer>
      </TodoMainComponent>
    );
  }
}
export default TodoComponent;
