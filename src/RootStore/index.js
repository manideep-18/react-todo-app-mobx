import TodoStore from "../stores/TodoStore";
import Todo from "../stores/Models/Todo";

class RootStore {
  constructor() {
    this.todoStore = new TodoStore();
    this.todo = new Todo();
  }
}
export default RootStore;
