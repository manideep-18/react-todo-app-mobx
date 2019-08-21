import React from "react";
import TodoRow from "./TodoRow";
import { TodoListContainer, TodoListBg } from "./styledComponents.js";
import { inject, observer } from "mobx-react";

@inject("todo", "todoStore")
@observer
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  displayTodoList = () => {
    const todoListDisplay = this.props.todoStore.AppliedFilterList.map(
      todoEachItem => (
        <TodoListContainer key={todoEachItem.todoId}>
          <TodoRow todoItem={todoEachItem} />
        </TodoListContainer>
      )
    );
    return todoListDisplay;
  };
  render() {
    return <TodoListBg>{this.displayTodoList()}</TodoListBg>;
  }
}
export default TodoList;
