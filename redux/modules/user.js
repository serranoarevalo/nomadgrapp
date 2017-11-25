// imports
import { API_URL, FB_APP_ID } from "../../constants";
import { actionCreators as userActions } from "./ui";
import { Facebook } from "expo";
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

function facebookLogin() {
  return async dispatch => {
    dispatch(userActions.setFetching());
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FB_APP_ID,
      {
        permissions: ["public_profile", "email", "user_friends"]
      }
    );
    if (type === "success") {
      fetch(`${API_URL}/users/login/facebook/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_token: token
        })
      })
        .then(response => response.json())
        .then(json => {
          if (json.token) {
            dispatch(setLogIn(json.token));
            dispatch(userActions.unsetFetching());
          }
        })
        .catch(err => console.log(err));
    }
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
  logout,
  facebookLogin
};

export { actionCreators };

// default reducer export

export default reducer;
