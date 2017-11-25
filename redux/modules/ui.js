// imports

// actions

const SET_FETCHING = "SET_FETCHING";
const UNSET_FETCHING = "UNSET_FETCHING";

// action creators

function setFetching() {
  return {
    type: SET_FETCHING
  };
}

function unsetFetching() {
  return {
    type: UNSET_FETCHING
  };
}

// api actions

// initial State

const initialState = {};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FETCHING:
      return applySetFetching(state, action);
    case UNSET_FETCHING:
      return applyUnsetFetching(state, action);
    default:
      return state;
  }
}

// reducer actions

function applySetFetching(state, action) {
  return {
    ...state,
    isFetching: true
  };
}

function applyUnsetFetching(state, action) {
  return {
    ...state,
    isFetching: false
  };
}

// exports

const actionCreators = {
  setFetching,
  unsetFetching
};

export { actionCreators };

// default reducer export

export default reducer;
