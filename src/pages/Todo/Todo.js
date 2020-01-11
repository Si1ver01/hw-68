import React from "react";
import Form from "../../components/Form";
import TodoList from "../../components/TodoList";

const Todo = () => {
  return (
    <div className="d-flex flex-column container flex-grow-1">
      <Form />
      <TodoList />
    </div>
  );
};

export default Todo;
