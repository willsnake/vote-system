// @flow
import { handleActions } from 'redux-actions';
import {
  CHANGE_SEARCH_INE,
  SET_LOADING_STATUS,
  SET_DISABLE_STATUS,
  SET_ERROR_STATUS,
  SET_SUCCESS_STATUS,
  SET_MESSAGE_STATUS
} from '../types';

export const APP_INITIAL_STATE = {
  message: '',
  error: false,
  loading: false,
  disabled: false,
  searchIne: '',
  success: false
};

export const app = handleActions(
  {
    [CHANGE_SEARCH_INE]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.loading = false;
      state.error = false;
      state.message = '';
      state.searchIne = action.payload;
      return state;
    },
    [SET_LOADING_STATUS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.loading = action.payload;
      return state;
    },
    [SET_DISABLE_STATUS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.disabled = action.payload;
      return state;
    },
    [SET_ERROR_STATUS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.error = action.payload;
      return state;
    },
    [SET_SUCCESS_STATUS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.success = action.payload;
      return state;
    },
    [SET_MESSAGE_STATUS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.message = action.payload;
      return state;
    }
  },
  APP_INITIAL_STATE
);
