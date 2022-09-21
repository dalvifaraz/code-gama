import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_ITEM_DATA, GET_ITEM_DATA_ASYNC, GET_ONLOAD_CATEGORY, GET_ONLOAD_CATEGORY_ASYNC, GET_ONLOAD_DATA, GET_ONLOAD_DATA_ASYNC } from './actionTypes';
import { apiCall, apiPostCall } from '../api';


export function* onLoadData() {
  const url = "https://fakestoreapi.com/products";
  const res = yield call(apiCall, url);
  yield put({
    type: GET_ONLOAD_DATA_ASYNC,
    data: res.data
  });

}

export function* onLoadCategory() {
  const url = "https://fakestoreapi.com/products/category/electronics?limit=3";
  const res = yield call(apiCall, url);
  yield put({
    type: GET_ONLOAD_CATEGORY_ASYNC,
    data: res.data
  });
}

export function* fetchItem(action) {
  console.log("SAGA");
  const url = `https://fakestoreapi.com/products/${action.data}`;
  const res = yield call(apiCall, url);
  yield put({
    type: GET_ITEM_DATA_ASYNC,
    data: res.data
  });
}
export function* watcherSaga() {
  yield takeEvery(GET_ONLOAD_DATA, onLoadData);
  yield takeEvery(GET_ONLOAD_CATEGORY, onLoadCategory);
  yield takeEvery(GET_ITEM_DATA, fetchItem);
}