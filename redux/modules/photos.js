// Imports

import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

// Actions

const ADD_FEED_PHOTO = "ADD_FEED_PHOTO";

// Action Creators

function addFeedPhoto(photo) {
  return {
    type: ADD_FEED_PHOTO,
    photo
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
        json.forEach(photo => dispatch(addFeedPhoto(photo)));
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
    case ADD_FEED_PHOTO:
      return applySetAddFeedPhoto(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applySetAddFeedPhoto(state, action) {
  const { photo } = action;
  return {
    ...photo,
    location: "feed"
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
