import { observable, computed, action } from "mobx";

class Todo {
  id = 0;
  @observable todoDescription;
  @observable todoIsCompleted;
  constructor() {
    this.id = this.id + 1;
    this.todoIsCompleted = false;
  }
  @action updateDescription = currentDescription => {
    this.todoDescription = currentDescription;
  };
  @action updateIsCompletedStatus = () => {
    this.todoIsCompleted = !this.todoIsCompleted;
  };
}

export default Todo;
