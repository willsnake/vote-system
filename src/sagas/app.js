import { takeEvery, put, select } from 'redux-saga/effects';
import * as actions from '../redux/actions';

export function* setIneSearch() {
  const data = yield select(({ app }) => app.searchIne);
  if (data.length === 13) {
    console.log('data', data);
  }
}

export default function* searchIneSaga() {
  yield takeEvery('CHANGE_SEARCH_INE', setIneSearch);
}
