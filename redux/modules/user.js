// imports
import { API_URL, FB_APP_ID } from "../../constants";
import { actionCreators as userActions } from "./ui";
import { Facebook } from "expo";
import { Alert } from "react-native";
// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
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

function setUser(user) {
  return {
    type: SET_USER,
    user
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
          dispatch(setLogIn(json.token));
          dispatch(setUser(json.user));
          dispatch(userActions.unsetFetching());
        } else {
          Alert.alert("Something went wrong, try again");
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
            dispatch(setUser(json.user));
            dispatch(userActions.unsetFetching());
          } else {
            Alert.alert("Something went wrong, try again");
            dispatch(userActions.unsetFetching());
          }
        })
        .catch(err => console.log(err));
    }
  };
}

function getNotifications() {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/notifications/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
      });
  };
}

function getUserProfile(username) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/users/${username}/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
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
    case SET_USER:
      return applySetUser(state, action);
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

function applySetUser(state, action) {
  const { user } = action;
  return {
    ...state,
    ...user
  };
}

// exports

const actionCreators = {
  login,
  logout,
  facebookLogin,
  getNotifications,
  getUserProfile
};

export { actionCreators };

// default reducer export

export default reducer;
