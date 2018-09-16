/*eslint-disable */
import { FETCH_QUESTION, FETCH_QUESTION_SUCCESS, FETCH_QUESTION_ERROR } from '../constants/stack';

const url = 'http://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=react-native&site=stackoverflow';

const fetchDataAction = () => ({
    type: FETCH_QUESTION,
});

const fetchDataSuccessAction = (payload) => ({
    type: FETCH_QUESTION_SUCCESS,
    payload,
})

const fetchDataErrorAction = (payload) => ({
    type: FETCH_QUESTION_ERROR,
    payload,
})

export const getStackQuestionsDataAction = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchDataAction());
            const response = await fetch(url);
            const data = await response.json();
            dispatch(fetchDataSuccessAction(data.items));
        } catch (e) {
            dispatch(fetchDataErrorAction(e));
        }
    }
}

