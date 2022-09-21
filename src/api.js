import axios from "axios";

export const apiCall = (url) => {
  return axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
};
export const apiPostCall = (url, req) => {
  axios
    .post(url, req)
    .then((res) => res)
    .catch((err) => err);
};