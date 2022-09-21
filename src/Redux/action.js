import {
  GET_ITEM_DATA,
  GET_ONLOAD_CATEGORY,
  GET_ONLOAD_DATA
} from './actionTypes';

export const onLoad = () => ({
  type: GET_ONLOAD_DATA,
});

export const onLoadCategory = () => ({
  type: GET_ONLOAD_CATEGORY
});

export const itemData = (data) => ({
  type: GET_ITEM_DATA,
  data: data
});