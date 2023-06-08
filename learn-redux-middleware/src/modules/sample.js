/* import {handleActions} from 'redux-actions'
import * as api from '../lib/api'

const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE'

const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS'
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE'


export const getPost = id => async dispatch => {
    dispatch({ type: GET_POST })
    try {
        const response = await api.getPost(id)
        dispatch({
            type: GET_POST_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: err,
            error: true
        })
        throw err;
    }
}

export const getUsers = id => async dispatch => {
    dispatch({ type: GET_USERS })
    try {
        const response = await api.getUsers()
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload:err,
            error: true
        })
        throw err;
    }
}

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false,
    },
    post: null,
    users: null
}

const sample = handleActions( // 리듀서
    {
        [GET_POST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true
            }
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false
            },
            post: action.payload
        }),
        [GET_POST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false
            },
        }),

        [GET_USERS]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: true
            },
            
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false
            },
            users: action.payload
        }),
        [GET_USERS_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false
            },  
    })
},
initialState
)

export default sample */

///////////////////

/* import {handleActions} from 'redux-actions'
import * as api from '../lib/api'
import createRequestThunk from '../lib/creaeteRequestThunk'

const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE'

const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS'
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE'


export const getPost = createRequestThunk(GET_POST, api.getPost)

export const getUsers = createRequestThunk(GET_USERS, api.getUsers)


const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false,
    },
    post: null,
    users: null
}

const sample = handleActions( // 리듀서
    {
        [GET_POST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true
            }
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false
            },
            post: action.payload
        }),
        [GET_POST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false
            },
        }),

        [GET_USERS]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: true
            },
            
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false
            },
            users: action.payload
        }),
        [GET_USERS_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false
            },  
    })
},
initialState
)

export default sample */

////////////////

/* import {handleActions} from 'redux-actions'
import * as api from '../lib/api'
import createRequestThunk from '../lib/creaeteRequestThunk'

const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE'

const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS'
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE'


export const getPost = createRequestThunk(GET_POST, api.getPost)

export const getUsers = createRequestThunk(GET_USERS, api.getUsers)


const initialState = {
    post: null,
    users: null
}

const sample = handleActions( // 리듀서
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload
            })
        }, 
    initialState
)

export default sample */

//////////////////

/* import {createAction, handleActions} from 'redux-actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../lib/api'
import { startLoading, finishLoading } from './loading'

const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE'

const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS'
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE'


export const getPost = createAction(GET_POST, id => id)

export const getUsers = createAction(GET_USERS)


function* getPostSaga(action) {
    yield put(startLoading(GET_POST))
    try {
        const post = yield call(api.getPost, action.payload)
        yield put({
            type: GET_POST_SUCCESS,
            payload: post.data
        })
    } catch(e) {
        yield put({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        })
    }
    yield put(finishLoading(GET_POST))
}


function* getUsersSaga() {
    yield put(startLoading(GET_USERS))
  
    try {
        const users = yield call(api.getPost)
        yield put({
            type: GET_USERS_SUCCESS,
            payload: users.data
        })
    } catch(e) {
        yield put({
            type: GET_USERS_FAILURE,
            payload: e,
            error: true
        })
    }
    yield put(finishLoading(GET_USERS))
}

 export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga)
    yield takeLatest(GET_USERS, getPostSaga)
 }



const initialState = {
    post: null,
    users: null
}

const sample = handleActions( 
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload
            })
        }, 
    initialState
)

export default sample */

//////////////////

import {createAction, handleActions} from 'redux-actions'
import {takeLatest } from 'redux-saga/effects'
import * as api from '../lib/api'
import createRequestSaga from '../lib/creaeteRequestSaga'

const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'


const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS'



export const getPost = createAction(GET_POST, id => id)

export const getUsers = createAction(GET_USERS)

const getPostSaga = createRequestSaga(GET_POST, api.getPost)
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers)

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga)
    yield takeLatest(GET_USERS, getUsersSaga)
}

const initialState = {
    post: null,
    users: null
}

const sample = handleActions( 
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload
            })
        }, 
    initialState
)

export default sample