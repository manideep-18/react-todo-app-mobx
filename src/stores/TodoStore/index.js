import { observable, computed, action } from "mobx";
import Todo from "../Models/Todo";
class TodoStore {
  todoIndex = 0;
  todoChangeIndex = 0;
  //todoItemsActive=0;
  @observable todoArray = [];
  @observable applyFilter = "All";

  @action deleteTodo = todoCloseId => {
    const todosArray = this.state.todoArray.filter(
      todoItem => todoItem.todoId !== todoCloseId
    );
    // this.setState({ todoArray: todosArray });
    this.todoArray = todosArray;
  };

  @action ClearCompleted = () => {
    ////console.log("fghjkl");
    const todosArray = this.state.todoArray.filter(
      todoItem => todoItem.todoIsCompleted === false
    );
    // this.setState({ todoArray: todosArray });
    //console.log("treq",this.state.todoArray);
    this.todoArray = todosArray;
  };

  @action addTodo = todoEachDescription => {
    // console.log("mani");
    const todo = new Todo();
    todo.updateDescription(todoEachDescription);
    this.todoArray.push(todo);
    //this.setState({ todoArray: allTodoElements });
  };

  @action todosUpdate = todoId => {
    console.log(this.todoArray[todoId].todoIsCompleted);
    this.todoArray[todoId].updateIsCompletedStatus();
  };

  @action todoEdit = (todoId, todoEachDescription) => {
    this.todoArray[todoId].updateDescription(todoEachDescription);
  };

  @action updateApplyFilter = filterType => {
    this.applyFilter = filterType;
  };
  @computed get todoArraylength() {
    return this.todoArray.length;
  }
  @computed get AppliedFilterList() {
    //this.setState({todoListType:"All"});
    // console.log(this.applyFilter);
    if (this.applyFilter === "Active") {
      //      this.todoItemsActive=this.todoItemsActive+1;
      const todosArray = this.todoArray.filter(
        todoItem => todoItem.todoIsCompleted === false
      );
      return todosArray;
    } else if (this.applyFilter === "Completed") {
      const todosArray = this.todoArray.filter(
        todoItem => todoItem.todoIsCompleted === true
      );
      return todosArray;
    } else {
      return this.todoArray;
    }
  }
}
export default TodoStore;
