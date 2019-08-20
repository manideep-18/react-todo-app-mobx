import React from "react";
import TodoComponent from "./TodoComponent";
import "./App.css";
import TodoStore from "./stores/TodoStore";
import { Provider } from "mobx-react";
const todoStore = new TodoStore();

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoComponent />
      </div>
    );
  }
}
export default App;
