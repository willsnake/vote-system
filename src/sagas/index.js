import { all } from 'redux-saga/effects';
import searchIneSaga from './app';

export default function* rootSaga() {
  yield all([searchIneSaga()]);
}
