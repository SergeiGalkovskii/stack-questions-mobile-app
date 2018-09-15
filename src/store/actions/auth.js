/*eslint-disable */
import { AsyncStorage } from 'react-native';
import { INIT_AUTH, AUTH_SUCCESS, AUTH_ERROR } from '../constants/auth';

const dataKey = 'stack-app:userName';
const passwordApp = 'test1234';
// const initAuthAction = () => ({
//     type: INIT_AUTH,
//     payload
// });

const authSuccessAction = payload => ({
    type: AUTH_SUCCESS,
    payload
});

const authErrorAction = payload => ({
    type: AUTH_ERROR,
    payload
});

const initAuthAction = () => {
    return async (dispatch) => {
        try {
            const userName = await AsyncStorage.getItem(dataKey);
            if (userName) {
                dispatch(authSuccessAction(userName));
            }
        } catch (e) {
            dispatch(authErrorAction(e));
        }
    }
}

const submitAuthAction = (data) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem(dataKey, data.userName);
            dispatch(authSuccessAction(userName));
        } catch (e) {
            dispatch(authErrorAction(e));
        }
    }
}

