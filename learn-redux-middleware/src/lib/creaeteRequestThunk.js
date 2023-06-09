/* import { startLoading, finishLoading } from '../modules/loading'

export default function createRequestThunk(type, request) {

    const SUCCESS = `${type}_SUCCESS`
    const FAILURE = `${type}_FAILURE`

    return params => async dispatch => {
        dispatch({ type })
        dispatch(startLoading(type))
        try {
            const response = await request(params)
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
            dispatch(finishLoading(type))
        } catch (err) {
            dispatch({
                type: FAILURE,
                payload: err,
                error: true,
            })
            dispatch(startLoading(type))
            throw err;
        }
    }
} */

//////////////////

import { call, put } from 'redux-saga/effects'
import { startLoading, finishLoading } from '../modules/loading'

export default function createRequestSaga(type, request) {

    const SUCCESS = `${type}_SUCCESS`
    const FAILURE = `${type}_FAILURE`

    return function*(action) {
        yield put(startLoading(type))
        try {
            const response = yield call(request, action.payload)
            yield put({
                type:SUCCESS,
                payload: response.data
            })
        } catch(e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            })
        }
        yield put(finishLoading(type))
    }
}