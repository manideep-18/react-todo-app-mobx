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

class TodoButtonComponent extends React.Component {
  presentStatus = "";
  constructor(props) {
    super(props);
    this.state = { todoArrayActiveLength: 0 };
  }
  displayActiveTodo = () => {
    //console.log("deep",this.props.todoArray);
    const todoArray = this.props.todoArray.filter(
      todoItem => todoItem.todoIsCompleted === false
    );
    this.state.todoArrayActiveLength = todoArray.length;
  };
  handleAllClick = () => {
    this.presentStatus = "All";
    this.props.onTodoListTypeChange(this.presentStatus);
  };
  handleActiveClick = () => {
    this.presentStatus = "Active";
    this.props.onTodoListTypeChange(this.presentStatus);
  };
  handleCompletedClick = () => {
    this.presentStatus = "Completed";
    this.props.onTodoListTypeChange(this.presentStatus);
  };
  handleClearCompletedClick = () => {
    this.props.onClearCompletedChange();
  };
  render() {
    //console.log(this.props.listType);
    return (
      <TodoBottomComponent>
        <ActiveListItems>
          {this.displayActiveTodo()}
          {this.state.todoArrayActiveLength > 0 ? (
            <ActiveListItemsText>
              {this.state.todoArrayActiveLength}items Left
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
