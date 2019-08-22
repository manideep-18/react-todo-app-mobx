import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoLIst";
import TodoButtonComponent from "./TodoButtonComponent";
import { Provider } from "mobx-react";
import {
  TodoMainComponent,
  TodoText,
  TodoAllComponentsContainer
} from "./styledComponents.js";
import TodoStore from "../stores/TodoStore";
import Todo from "../stores/Models/Todo";
const todoStore = new TodoStore();
const todo = new Todo();

class TodoComponent extends React.Component {
  render() {
    return (
      <Provider todoStore={todoStore} todo={todo}>
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
