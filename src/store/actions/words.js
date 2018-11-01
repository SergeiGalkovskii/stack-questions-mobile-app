/*eslint-disable */
import { FETCH_WORDS, FETCH_WORDS_SUCCESS, FETCH_WORDS_ERROR } from "../constants/words";
import { API } from "../../../config";

const fetchDataAction = () => ({
  type: FETCH_WORDS
});

const fetchDataSuccessAction = payload => ({
  type: FETCH_WORDS_SUCCESS,
  payload
});

const fetchDataErrorAction = payload => ({
  type: FETCH_WORDS_ERROR,
  payload
});

export const getWordsAction = (quantity = 3) => {
  return async dispatch => {
    try {
      dispatch(fetchDataAction());
      const response = await fetch(`${API}/words?limit=${quantity}`);
      const data = await response.json();
      dispatch(fetchDataSuccessAction(data));
    } catch (e) {
      dispatch(fetchDataErrorAction(e));
    }
  };
};
