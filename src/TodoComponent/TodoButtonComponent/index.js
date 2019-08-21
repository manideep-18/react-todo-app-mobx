import React from "react";
// import "./todoButtonComponentStyles.css";
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
  presentStatus = "";
  todoArrayActiveLength = 0;
  constructor(props) {
    super(props);
    // this.state = { todoArrayActiveLength: 0 };
  }
  displayActiveTodo = () => {
    // console.log("deep");
    const todosArray = this.props.todoStore.AppliedFilterList;
    // console.log("mani", todosArray);
    const todoArray = todosArray.filter(
      todoItem => todoItem.todoIsCompleted === false
    );
    const len = todoArray.length;
    // console.log(len);
    this.todoArrayActiveLength = len;
  };
  handleAllClick = () => {
    //this.presentStatus = "All";
    this.props.todoStore.updateApplyFilter("All");
  };
  handleActiveClick = () => {
    // this.presentStatus = "Active";
    // this.props.onTodoListTypeChange(this.presentStatus);
    this.props.todoStore.updateApplyFilter("Active");
  };
  handleCompletedClick = () => {
    // this.presentStatus = "Completed";
    // this.props.onTodoListTypeChange(this.presentStatus);
    this.props.todoStore.updateApplyFilter("Completed");
  };
  handleClearCompletedClick = () => {
    this.props.todoStore.ClearCompleted();
  };
  render() {
    // console.log("mani8");
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
