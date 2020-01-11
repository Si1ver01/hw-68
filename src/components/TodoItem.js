import React, { useState } from "react";
import { changeTodo } from "../store/actions";

const TodoItem = ({ todo, complite, index, id, removeHandler }) => {
  const [checked, setChecked] = useState(complite);

  const inputHandler = () => {
    changeTodo(id, !checked, todo);
    setChecked(!checked);
  };

  const classes = ["ml-2"];
  if (checked) {
    classes.push("text-success");
  }

  return (
    <li className="d-flex justify-content-between p-2 mb-2 align-items-center border border-secondary rounded">
      <span>
        <input type="checkbox" checked={checked} onChange={inputHandler} />
        <span className="ml-2">{index + 1}.</span>
        <span className={classes.join(" ")}>{todo}</span>
      </span>
      <button onClick={() => removeHandler(id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
