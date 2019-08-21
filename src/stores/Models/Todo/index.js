import { observable, computed, action } from "mobx";
var id = 0;
class Todo {
  todoId;
  @observable todoDescription;
  @observable todoIsCompleted;
  constructor(rootStore) {
    this.todoId = id++;
    this.todoIsCompleted = false;
    this.rootStore = rootStore;
  }
  @action updateDescription = currentDescription => {
    this.todoDescription = currentDescription;
  };
  @action updateIsCompletedStatus = () => {
    this.todoIsCompleted = !this.todoIsCompleted;
  };
}

export default Todo;
