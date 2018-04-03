import _ from 'lodash';
import { handleActions } from 'redux-actions';
import { TOAST_DOWN, TOAST_UP } from '../types';

let TOAST_INITIAL_STATE = {
  info: null,
  visible: false
};

let initialState = {
  toaster: Object.assign({}, TOAST_INITIAL_STATE)
};

export const app = handleActions(
  {
    // [TOAST_UP]: (_state, action) => {
    //   let state = _.cloneDeep(_state);
    //   state.toaster.info = action.payload;
    //   state.toaster.visible = true;
    //   return state;
    // },
    // [TOAST_DOWN]: _state => {
    //   let state = _.cloneDeep(_state);
    //   state.toaster.info = null;
    //   state.toaster.visible = false;
    //   return state;
    // }
  },
  initialState
);
