import React from "react";
import {
  TodoRowContainer,
  CloseIconStyleOnEdit,
  TodoRowActiveStyles,
  EditInputStyleContainer,
  EditInputText,
  ActiveDefaultImage,
  ActiveDefaultText,
  TodoRowCompletedStyles,
  IconCompletedstyle,
  TextCompletedStyle
} from "./styledComponents.js";
import { inject, observer } from "mobx-react";

@inject("todoStore", "todo")
@observer
class TodoRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditMode: false, value: "", click: false };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.props.todoItem.updateDescription(this.state.value);
      this.setState({ isEditMode: false });
    }
  };
  handleDoubleClick = () => {
    this.setState({
      isEditMode: !this.state.isEditMode,
      value: this.props.todoItem.todoDescription
    });
  };
  handleCloseChange = e => {
    this.props.todoStore.deleteTodo(this.props.todoItem.todoId);
  };
  handleClick = e => {
    this.props.todoItem.updateIsCompletedStatus();
  };
  renderEdit = () => {
    const todoEditItem = (
      <EditInputStyleContainer>
        <EditInputText
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </EditInputStyleContainer>
    );
    return todoEditItem;
  };
  renderDefault = () => {
    const descriptionTodoActiveItem = this.props.todoItem.todoDescription;
    return (
      <>
        <ActiveDefaultImage onClick={this.handleClick} src="index.png" />
        <ActiveDefaultText onDoubleClick={this.handleDoubleClick}>
          {descriptionTodoActiveItem}
        </ActiveDefaultText>
      </>
    );
  };
  renderActive = () => {
    const todoActiveElelement = (
      <TodoRowActiveStyles>
        {this.state.isEditMode ? this.renderEdit() : this.renderDefault()}
      </TodoRowActiveStyles>
    );
    return todoActiveElelement;
  };
  renderCompleted = () => {
    const descriptionTodoCompletedItem = this.props.todoItem.todoDescription;
    const todoCompletedElement = (
      <TodoRowCompletedStyles onClick={this.handleClick}>
        <IconCompletedstyle src="indexCompleted.jpeg" />
        <TextCompletedStyle>{descriptionTodoCompletedItem}</TextCompletedStyle>
      </TodoRowCompletedStyles>
    );
    return todoCompletedElement;
  };
  renderTodo = () => {
    const isCompleted = this.props.todoItem.todoIsCompleted;
    if (isCompleted === false) {
      return this.renderActive();
    } else {
      return this.renderCompleted();
    }
  };
  render() {
    return (
      <TodoRowContainer>
        {this.renderTodo()}
        {!this.state.isEditMode ? (
          <>
            <CloseIconStyleOnEdit
              src="indexClose.png"
              onClick={this.handleCloseChange}
            />
          </>
        ) : null}
      </TodoRowContainer>
    );
  }
}
export default TodoRow;
