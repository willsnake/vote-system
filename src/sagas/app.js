import { call, takeEvery, put, select } from 'redux-saga/effects';
import * as actions from '../redux/actions';
import { searchIneApi } from '../api';

export function* setIneSearch() {
  try {
    const data = yield select(({ app }) => app.searchIne);
    if (data.length === 13) {
      yield put(actions.setLoadingStatus(true));
      yield put(actions.setDisableStatus(true));
      yield call(searchIneApi, data);
      yield put(actions.setDisableStatus(false));
      yield put(actions.setLoadingStatus(false));
      yield put(actions.setSuccessStatus(true));
      // TODO: Here we have to redirect the user after some time
    }
  } catch (e) {
    console.error('e', e);
    yield put(actions.setLoadingStatus(false));
    yield put(actions.setDisableStatus(false));
    yield put(actions.setErrorStatus(true));
  }
}

export default function* searchIneSaga() {
  yield takeEvery('CHANGE_SEARCH_INE', setIneSearch);
}
