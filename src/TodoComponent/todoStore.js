import { observable, computed, action } from "mobx";
class TodoStore {
  todoIndex = 0;
  todoChangeIndex = 0;
  //todoItemsActive=0;
  @observable todoArray = [];
  @observable todoListType = "All";
  @action handleEditChange(todoItemId, todoDescriptionEdit) {
    const todosArray = this.state.todoArray;
    const editTodoIndex = todosArray.findIndex(
      todoItem => todoItem.todoId === todoItemId
    );
    todosArray[editTodoIndex]["todoDescription"] = todoDescriptionEdit;
    // this.setState({ todoArray: todosArray });
    console.log(this.state.todoArray);
  }
  @action handleTodo(todoType) {
    //console.log(todoType);
    this.setState({ todoListType: todoType });
  }
  handleCloseChange = todoCloseId => {
    const todosArray = this.state.todoArray.filter(
      todoItem => todoItem.todoId !== todoCloseId
    );
    this.setState({ todoArray: todosArray });
  };
  getTodos = () => {
    //this.setState({todoListType:"All"});
    //console.log(this.state.todoListType);
    if (this.state.todoListType === "Active") {
      //      this.todoItemsActive=this.todoItemsActive+1;
      const todosArray = this.state.todoArray.filter(
        todoItem => todoItem.todoIsCompleted === false
      );
      return todosArray;
    } else if (this.state.todoListType === "Completed") {
      const todosArray = this.state.todoArray.filter(
        todoItem => todoItem.todoIsCompleted === true
      );
      return todosArray;
    } else {
      return this.state.todoArray;
    }
  };
  handleClearCompletedChange = () => {
    ////console.log("fghjkl");
    const todosArray = this.state.todoArray.filter(
      todoItem => todoItem.todoIsCompleted === false
    );
    this.setState({ todoArray: todosArray });
    //console.log("treq",this.state.todoArray);
  };
  handleTodoChange = todoEachItemId => {
    const todoChangeArray = this.state.todoArray;
    this.todoChangeIndex = 0;
    for (var i = 0; i < todoChangeArray.length; i++) {
      if (todoChangeArray[i]["todoId"] === todoEachItemId) {
        this.todoChangeIndex = i;
        //console.log("mjyt",this.todoChangeIndex);
      }
    }
    ////console.log(todoChangeArray[this.todoIndex]);
    todoChangeArray[this.todoChangeIndex]["todoIsCompleted"] = !todoChangeArray[
      this.todoChangeIndex
    ]["todoIsCompleted"];
    this.setState({ todoArray: todoChangeArray });
    //console.log("todoChange",this.state.todoArray);
  };
  handleEnterChange = todoEachItem => {
    this.todoIndex = this.todoIndex + 1;
    let todoElement = {
      todoId: this.todoIndex,
      todoDescription: todoEachItem,
      todoIsCompleted: false
    };
    const allTodoElements = this.state.todoArray;
    allTodoElements.push(todoElement);
    this.setState({ todoArray: allTodoElements });
  };
}
export default TodoStore;
