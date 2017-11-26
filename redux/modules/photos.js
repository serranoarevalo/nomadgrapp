// Imports

import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

// Actions

const ADD_FEED = "ADD_FEED";

// Action Creators

function addFeed(feed) {
  return {
    type: ADD_FEED,
    feed
  };
}

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
        dispatch(addFeed(json));
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
      .then(json => {});
  };
}

// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FEED:
      return applyAddFeed(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyAddFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

// Exports

const actionCreators = {
  getFeed,
  getSearch
};

export { actionCreators };

// Export default reducer

export default reducer;
