import TodoStore from "../stores/TodoStore";
import Todo from "../stores/Models/Todo";
import { observable } from "mobx";

class RootStore {
  constructor() {
    this.todoStore = new TodoStore(this);
    this.todo = new Todo(this);
  }
}
export default RootStore;
