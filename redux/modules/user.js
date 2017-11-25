// imports

import { actionCreators as userActions } from "./ui";
// actions
const SAVE_TOKEN = "SAVE_TOKEN";

// action creators

function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  };
}

// api actions

function login(username, password) {
  return dispatch => {
    dispatch(userActions.setFetching());
    fetch("/rest-auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(userActions.unsetFetching());
          dispatch(saveToken(json.token));
        } else {
          dispatch(userActions.unsetFetching());
        }
      });
  };
}

// initial State

const initialState = {
  isLoggedIn: false
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySaveToken(state, action);
    default:
      return state;
  }
}

// reducer actions

function applySaveToken(state, action) {
  const { token } = action;
  return { ...state, isLoggedIn: true, token };
}

// exports

const actionCreators = {
  login
};

export { actionCreators };

// default reducer export

export default reducer;
