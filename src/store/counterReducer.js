import { DEC_COUNTER, GET_COUNTER, INC_COUNTER } from "./types";

const initialState = {
  counter: 0
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTER:
      return { ...state, counter: action.payload };
    case INC_COUNTER:
      return { ...state, counter: state.counter + action.payload };
    case DEC_COUNTER:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
}
