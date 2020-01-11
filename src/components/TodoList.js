import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { deleteTodo, getTodo } from "../store/actions";

const TodoList = props => {
  useEffect(() => {
    props.getTodo();
    //eslint-disable-next-line
  }, []);

  return (
    <ul className="">
      {props.todo.length ? (
        props.todo.map((todo, index) => (
          <TodoItem
            todo={todo.newTask}
            index={index}
            complite={todo.complite}
            key={todo.id}
            id={todo.id}
            removeHandler={props.deleteTodo}
          />
        ))
      ) : (
        <li>No todos</li>
      )}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    todo: state.todo.todo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodo: () => dispatch(getTodo()),
    deleteTodo: id => dispatch(deleteTodo(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
