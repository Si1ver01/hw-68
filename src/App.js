import React from "react";
import "./App.scss";
import Todo from "./pages/Todo/Todo";
import Counter from "./pages/Counter/Counter";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Todo app redux</h1>
      <Todo />
      <Counter />
    </div>
  );
}

export default App;
