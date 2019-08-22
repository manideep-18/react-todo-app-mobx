import React from "react";
import {
  ActiveListItems,
  ActiveListItemsText,
  ButtonsListComponent,
  ClearCompletedComponent,
  ClearCompletedButton,
  TodoBottonComponentBg
} from "./styledComponents.js";
import { inject, observer } from "mobx-react";
import ApplyFilterButton from "./ApplyFilterButton/index.js";

@inject("todoStore")
@observer
class TodoButtonComponent extends React.Component {
  todoArrayActiveLength = 0;
  constructor(props) {
    super(props);
  }
  displayActiveTodo = () => {
    const todoArray = this.props.todoStore.AppliedFilterList.filter(
      todoItem => todoItem.todoIsCompleted === false
    );
    const len = todoArray.lenssgth;
    this.todoArrayActiveLength = len;
  };

  handleClearCompletedClick = () => {
    this.props.todoStore.ClearCompleted();
  };
  render() {
    return (
      <TodoBottonComponentBg>
        <ActiveListItems>
          {this.displayActiveTodo()}
          {this.todoArrayActiveLength > 0 ? (
            <ActiveListItemsText>
              {this.todoArrayActiveLength}items Left
            </ActiveListItemsText>
          ) : null}
        </ActiveListItems>
        <ButtonsListComponent>
          <ApplyFilterButton filter="All" />
          <ApplyFilterButton filter="Active" />
          <ApplyFilterButton filter="Completed" />
        </ButtonsListComponent>
        <ClearCompletedComponent>
          <ClearCompletedButton onClick={this.handleClearCompletedClick}>
            Clear completed
          </ClearCompletedButton>
        </ClearCompletedComponent>
      </TodoBottonComponentBg>
    );
  }
}
export default TodoButtonComponent;
