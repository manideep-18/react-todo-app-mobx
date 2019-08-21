import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoLIst";
import TodoButtonComponent from "./TodoButtonComponent";
import { inject, Provider } from "mobx-react";
import {
  TodoMainComponent,
  TodoText,
  TodoAllComponentsContainer
} from "./styledComponents.js";
import TodoStore from "../stores/TodoStore";
// import "./style.css";
const todoStore = new TodoStore();

class TodoComponent extends React.Component {
  render() {
    // console.log("mani");
    return (
      <Provider todoStore={todoStore}>
        <TodoMainComponent>
          <TodoText>todos</TodoText>
          <TodoAllComponentsContainer>
            <TodoInput />
            <TodoList />
            <TodoButtonComponent />
          </TodoAllComponentsContainer>
        </TodoMainComponent>
      </Provider>
    );
  }
}
export default TodoComponent;
