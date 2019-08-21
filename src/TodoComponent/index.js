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
import RootStore from "../RootStore";
const rootStore = new RootStore();

class TodoComponent extends React.Component {
  render() {
    return (
      <Provider
        rootStore={rootStore}
        todoStore={rootStore.todoStore}
        todo={rootStore.todo}
      >
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
