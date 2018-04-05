import { CHANGE_SEARCH_INE, SET_LOADING_STATUS } from '../types';

export const changeSearchIne = ine => ({
  type: CHANGE_SEARCH_INE,
  ine
});

export const setLoadingStatus = status => ({
  type: SET_LOADING_STATUS,
  status
});
