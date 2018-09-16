import { FETCH_QUESTION, FETCH_QUESTION_SUCCESS, FETCH_QUESTION_ERROR } from '../constants/stack';

const initState = {
  data: [],
  isLoading: false,
  error: null,
};

const stackReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_QUESTION:
      return { ...state, isLoading: true };
    case FETCH_QUESTION_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case FETCH_QUESTION_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default: return state;
  }
};

export default stackReducer;
