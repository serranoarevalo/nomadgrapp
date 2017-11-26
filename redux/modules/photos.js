// Imports

import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";
// Actions

// Action Creators

// API Actions

function getFeed() {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/images/`, {
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

function getSearch() {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/images/search/`, {
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

// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// Reducer Functions

// Exports

const actionCreators = {
  getFeed,
  getSearch
};

export { actionCreators };

// Export default reducer

export default reducer;
