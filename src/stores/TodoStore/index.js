import { observable, computed, action } from "mobx";
import Todo from "../Models/Todo";
class TodoStore {
  todoIndex = 0;
  todoChangeIndex = 0;
  @observable todoArray = [];
  @observable applyFilter = "All";
  @action deleteTodo = todoCloseId => {
    const todosArray = this.todoArray.filter(
      todoItem => todoItem.todoId !== todoCloseId
    );
    this.todoArray = todosArray;
  };

  @action ClearCompleted = () => {
    const todosArray = this.todoArray.filter(
      todoItem => todoItem.todoIsCompleted === false
    );

    this.todoArray = todosArray;
  };

  @action addTodo = todoEachDescription => {
    const todo = new Todo();
    todo.updateDescription(todoEachDescription);
    this.todoArray.push(todo);
  };

  @action updateApplyFilter = filterType => {
    this.applyFilter = filterType;
  };
  @computed get todoArraylength() {
    return this.todoArray.length;
  }
  @computed get AppliedFilterList() {
    if (this.applyFilter === "Active") {
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
