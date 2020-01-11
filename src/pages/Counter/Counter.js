/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCounter, modifyCounter } from "../../store/actions";

const Counter = props => {
  useEffect(() => {
    props.getCounter();
  }, []);

  const buttonHandler = event => {
    const type = event.target.name;
    const value = parseInt(event.target.value);
    props.modifyCounter(type, value);
  };

  return (
    <div>
      <h2 className="text-center">Redux counter : {props.counter || 0}</h2>
      <div className="d-flex justify-content-center mb-1 ">
        <button
          className="btn btn-success mr-2"
          name="inc"
          value={1}
          onClick={event => buttonHandler(event)}
        >
          Incriment
        </button>
        <button
          className="btn btn-danger mr-2"
          name="dec"
          value={1}
          onClick={event => buttonHandler(event)}
        >
          Decrement
        </button>
        <button
          className="btn btn-success mr-2"
          name="inc"
          value={5}
          onClick={event => buttonHandler(event)}
        >
          Incriment 5
        </button>
        <button
          className="btn btn-danger mr-2"
          name="dec"
          value={5}
          onClick={event => buttonHandler(event)}
        >
          Decrement 5
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    counter: state.counter.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCounter: () => dispatch(getCounter()),
    modifyCounter: (type, value) => dispatch(modifyCounter(type, value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
