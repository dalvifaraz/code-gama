import {
  GET_ITEM_DATA_ASYNC,
  GET_ONLOAD_CATEGORY_ASYNC,
  GET_ONLOAD_DATA_ASYNC
} from './actionTypes';

const initialState = {
  productData: [],
  categories: [],
  item: {}
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONLOAD_DATA_ASYNC: {
      const data = action.data;
      return Object.assign({}, state, {
        productData: data
      });
    }
    case GET_ONLOAD_CATEGORY_ASYNC: {
      const data = action.data;
      return Object.assign({}, state, {
        categories: data
      });
    }
    case GET_ITEM_DATA_ASYNC: {
      const data = action.data;
      return Object.assign({}, state, {
        item: data
      });
    }
    default:
      return state;
  }
};