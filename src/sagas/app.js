// @flow
import { call, takeEvery, put, select } from 'redux-saga/effects';
import {
  setLoadingStatus,
  setErrorStatus,
  setDisableStatus,
  setSuccessStatus,
  setMessageStatus
} from '../redux/actions';
import { searchIneApi } from '../api';

export function* setIneSearch() {
  try {
    const data = yield select(({ app }) => app.searchIne);
    if (data.length === 13) {
      yield put(setLoadingStatus(true));
      yield put(setDisableStatus(true));
      yield call(searchIneApi, data);
      yield put(setDisableStatus(false));
      yield put(setLoadingStatus(false));
      yield put(setSuccessStatus(true));
      yield put(setMessageStatus('Bienvenido, recuerde que el voto es libre y secreto.'));
    }
  } catch (e) {
    yield put(setLoadingStatus(false));
    yield put(setDisableStatus(false));
    yield put(setErrorStatus(true));
    yield put(setMessageStatus(`${e.message}`));
  }
}

export default function* searchIneSaga() {
  yield takeEvery('CHANGE_SEARCH_INE', setIneSearch);
}
