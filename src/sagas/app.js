import { call, takeEvery, put, select } from 'redux-saga/effects';
import * as actions from '../redux/actions';
import { searchIneApi } from '../api';

export function* setIneSearch() {
  try {
    const data = yield select(({ app }) => app.searchIne);
    if (data.length === 13) {
      console.log('data', data);
      yield put(actions.setLoadingStatus);
      let res = yield call(searchIneApi, data);
      console.log('res', res);
    }
  } catch (e) {
    console.error('e', e);
  }
}

export default function* searchIneSaga() {
  yield takeEvery('CHANGE_SEARCH_INE', setIneSearch);
}
