import { put, takeEvery, all } from 'redux-saga/effects';
import { TIMEOUT } from 'dns';

const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

export default function* rootSaga() {
  yield all([]);
}
