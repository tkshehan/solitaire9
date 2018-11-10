import update from 'immutability-helper';

import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from '../actions/auth';

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_AUTH_TOKEN) {
    return update(state, {
      authToken: {$set: action.authToken},
    });
  } else if (action.type === CLEAR_AUTH) {
    return update(state, {
      authToken: {$set: null},
      currentUser: {$set: null},
    });
  } else if (action.type === AUTH_REQUEST) {
    return update(state, {
      loading: {$set: true},
      error: {$set: null},
    });
  } else if (action.type = AUTH_SUCCESS) {
    return update(state, {
      loading: {$set: false},
      currentUser: {$set: action.currentUser},
    });
  } else if (action.type === AUTH_ERROR) {
    return update(state, {
      loading: {$set: false},
      error: {$set: action.error},
    });
  }
  return state;
}
