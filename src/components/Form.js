import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";

const Form = props => {
  const [todo, setTodo] = useState("");

  const sendTodo = (newTodo, event) => {
    event.preventDefault();
    props.addTodo(newTodo);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={event => sendTodo(todo, event)}>
        <div className="form-group">
          <label htmlFor="newTodo">New todo</label>
          <input
            type="text"
            className="form-control"
            id="newTodo"
            placeholder="Enter todo"
            value={todo}
            onChange={event => setTodo(event.target.value)}
          />
          <small className="form-text text-muted">
            We'll never share your todo with anyone else.
          </small>
        </div>
      </form>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (newTodo) => dispatch(addTodo(newTodo)),
  };
}

export default connect(null, mapDispatchToProps)(Form);
