/*eslint-disable */
import { AsyncStorage } from 'react-native';
import { AUTH_SUCCESS, AUTH_ERROR, LOG_OUT_SUCCESS, LOG_OUT_ERROR } from '../constants/auth';

const dataKey = 'stack-app:userName';

const authSuccessAction = payload => ({
    type: AUTH_SUCCESS,
    payload
});

const authErrorAction = payload => ({
    type: AUTH_ERROR,
    payload
});

const logOutSuccessAction = () => ({
    type: LOG_OUT_SUCCESS,
});

const logOutErrorAction = () => ({
    type: LOG_OUT_ERROR,
});

export const initAuthAction = () => {
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

export const submitAuthAction = (data) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem(dataKey, data.userName);
            dispatch(authSuccessAction(data.userName));
        } catch (e) {
            dispatch(authErrorAction(e));
        }
    }
}

export const logOutAction = () => {
    return async (dispatch) => {
        try {
            await AsyncStorage.removeItem(dataKey);
            dispatch(logOutSuccessAction());
        } catch (e) {
            dispatch(logOutErrorAction());
        }
    }
}

