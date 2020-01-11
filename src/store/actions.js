import {
  DEC_COUNTER,
  GET_COUNTER,
  GET_TODO,
  INC_COUNTER,
  REMOVE_TODO
} from "./types";

export function getTodo() {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://ddanshin-af25f.firebaseio.com/todo.json"
      );
      const data = await response.json();
      const todos = Object.keys(data).map(key => ({
        ...data[key],
        id: key
      }));
      dispatch({
        type: GET_TODO,
        payload: todos
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function addTodo(newTodo) {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://ddanshin-af25f.firebaseio.com/todo.json",
        {
          method: "POST",
          body: JSON.stringify({ complite: false, newTask: newTodo })
        }
      );
      const data = await response.json();
      dispatch({
        type: GET_TODO,
        payload: [{ complite: false, newTask: newTodo, id: data.name }]
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export async function changeTodo(id, status, text) {
  try {
    await fetch(`https://ddanshin-af25f.firebaseio.com/todo/${id}.json`, {
      method: "PUT",
      body: JSON.stringify({ complite: status, newTask: text })
    });
  } catch (e) {
    console.log(e);
  }
}

export function deleteTodo(id) {
  return async dispatch => {
    try {
      await fetch(`https://ddanshin-af25f.firebaseio.com/todo/${id}.json`, {
        method: "DELETE"
      });
      dispatch({ type: REMOVE_TODO, payload: id });
    } catch (e) {
      console.log(e);
    }
  };
}

export function modifyCounter(type, value) {
  return async (dispatch, getState) => {
    if (type === "inc") {
      dispatch({
        type: INC_COUNTER,
        payload: value
      });
    } else {
      dispatch({
        type: DEC_COUNTER,
        payload: value
      });
    }

    const counter = getState().counter.counter;

    try {
      await fetch("https://ddanshin-af25f.firebaseio.com/counter.json", {
        method: "PUT",
        body: counter
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function getCounter() {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://ddanshin-af25f.firebaseio.com/counter.json"
      );
      const data = await response.json();
      dispatch({
        type: GET_COUNTER,
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  };
}
