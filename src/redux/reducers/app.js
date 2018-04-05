import { handleActions } from 'redux-actions';
import { CHANGE_SEARCH_INE } from '../types';

let initialState = {};

export const app = handleActions(
  {
    [CHANGE_SEARCH_INE]: (_state, action) => {
      let state = Object.assign({}, { ..._state });
      state.loading = false;
      state.error = false;
      state.searchIne = action.ine;
      return state;
    }
  },
  initialState
);
