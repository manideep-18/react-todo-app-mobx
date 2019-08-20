import { observable, computed, action } from "mobx";

class Todo {
  id = 0;
  @observable description;
  @observable isCompleted;
  constructor() {
    id = id + 1;
    this.isCompleted = false;
  }
  @action updateDescription = currentDescription => {
    this.description = currentDescription;
  };
  @action updateIsCompletedStatus = () => {
    this.isCompleted = !this.isCompleted;
  };
}

export default Todo;
