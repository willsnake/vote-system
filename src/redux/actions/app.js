import { createAction } from 'redux-actions';

import {
  CHANGE_SEARCH_INE,
  SET_LOADING_STATUS,
  SET_DISABLE_STATUS,
  SET_ERROR_STATUS,
  SET_SUCCESS_STATUS
} from '../types';

export const changeSearchIne = createAction(CHANGE_SEARCH_INE);

export const setLoadingStatus = createAction(SET_LOADING_STATUS);

export const setDisableStatus = createAction(SET_DISABLE_STATUS);

export const setErrorStatus = createAction(SET_ERROR_STATUS);

export const setSuccessStatus = createAction(SET_SUCCESS_STATUS);
