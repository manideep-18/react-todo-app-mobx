import React from "react";
import {
  TodoBottomComponent,
  ActiveListItems,
  ActiveListItemsText,
  ButtonsListComponent,
  AllButtonComponent,
  ActiveButtonComponent,
  CompletedButtonComponent,
  ClearCompletedComponent,
  ClearCompletedButton
} from "./styledComponents.js";
import { inject, observer } from "mobx-react";

@inject("todoStore")
@observer
class TodoButtonComponent extends React.Component {
  todoArrayActiveLength = 0;
  constructor(props) {
    super(props);
  }
  displayActiveTodo = () => {
    const todosArray = this.props.todoStore.AppliedFilterList;
    const todoArray = todosArray.filter(
      todoItem => todoItem.todoIsCompleted === false
    );
    const len = todoArray.length;
    this.todoArrayActiveLength = len;
  };
  handleAllClick = () => {
    this.props.todoStore.updateApplyFilter("All");
  };
  handleActiveClick = () => {
    this.props.todoStore.updateApplyFilter("Active");
  };
  handleCompletedClick = () => {
    this.props.todoStore.updateApplyFilter("Completed");
  };
  handleClearCompletedClick = () => {
    this.props.todoStore.ClearCompleted();
  };
  render() {
    return (
      <TodoBottomComponent>
        <ActiveListItems>
          {this.displayActiveTodo()}
          {this.todoArrayActiveLength > 0 ? (
            <ActiveListItemsText>
              {this.todoArrayActiveLength}items Left
            </ActiveListItemsText>
          ) : null}
        </ActiveListItems>
        <ButtonsListComponent>
          <AllButtonComponent listType="All" onClick={this.handleAllClick}>
            All
          </AllButtonComponent>
          <ActiveButtonComponent
            listType="Active"
            onClick={this.handleActiveClick}
          >
            Active
          </ActiveButtonComponent>
          <CompletedButtonComponent
            listType="Completed"
            onClick={this.handleCompletedClick}
          >
            Completed
          </CompletedButtonComponent>
        </ButtonsListComponent>
        <ClearCompletedComponent>
          <ClearCompletedButton onClick={this.handleClearCompletedClick}>
            Clear completed
          </ClearCompletedButton>
        </ClearCompletedComponent>
      </TodoBottomComponent>
    );
  }
}
export default TodoButtonComponent;
