// import

// action types

const INCREMENT = "post/INCREMENT";
const DECREMENT = "post/DECREMENT";

// action creators

function increment() {
  return {
    type: INCREMENT
  };
}

function decrement() {
  return {
    type: DECREMENT
  };
}

// api actions

// initial state

const initialState = {
  number: 0
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return applyIncrement(state, action);
    case DECREMENT:
      return applyDecrement(state, action);
    default:
      return state;
  }
}

// reducer functions

function applyIncrement(state, action) {
  return {
    ...state,
    number: state.number + 1
  };
}

function applyDecrement(state, action) {
  return {
    ...state,
    number: state.number - 1
  };
}

// exports action creators

export const actionCreators = {
  increment,
  decrement
};

// exports reducer by default

export default reducer;
