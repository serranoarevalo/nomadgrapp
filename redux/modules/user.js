// imports
import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./ui";
// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
// action creators

function setLogIn(token) {
  return {
    type: LOG_IN,
    token
  };
}

function logout() {
  return {
    type: LOG_OUT
  };
}

// api actions

function login(username, password) {
  return dispatch => {
    dispatch(userActions.setFetching());
    fetch(`${API_URL}/rest-auth/login/`, {
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
          dispatch(setLogIn(json.token));
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
    case LOG_IN:
      return applySetLogIn(state, action);
    case LOG_OUT:
      return applyLogOut();
    default:
      return state;
  }
}

// reducer actions

function applySetLogIn(state, action) {
  const { token } = action;
  return { ...state, isLoggedIn: true, token };
}

function applyLogOut(state, action) {
  return {
    ...state,
    isLoggedIn: false,
    token: ""
  };
}

// exports

const actionCreators = {
  login,
  logout
};

export { actionCreators };

// default reducer export

export default reducer;
