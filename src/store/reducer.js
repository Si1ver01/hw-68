import { GET_TODO, REMOVE_TODO } from "./types";

const initialState = {
  todo: [],
  error: null
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODO:
      return { ...state, todo: [...state.todo, ...action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}
