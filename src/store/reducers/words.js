import { FETCH_WORDS,FETCH_WORDS_SUCCESS,FETCH_WORDS_ERROR } from '../constants/words';

const initState = {
  data: [],
  isLoading: false,
  error: null,
};

const wordsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return { ...state, isLoading: true };
    case FETCH_WORDS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case FETCH_WORDS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default: return state;
  }
};

export default wordsReducer;
