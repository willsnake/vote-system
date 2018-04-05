import { handleActions } from 'redux-actions';
import { CHANGE_SEARCH_INE, SET_LOADING_STATUS } from '../types';

export const APP_INITIAL_STATE = {
  error: false,
  loading: false,
  searchIne: ''
};

export const app = handleActions(
  {
    [CHANGE_SEARCH_INE]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.loading = false;
      state.error = false;
      state.searchIne = action.ine;
      return state;
    },
    [SET_LOADING_STATUS]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.loading = action.status;
      return state;
    }
  },
  APP_INITIAL_STATE
);
