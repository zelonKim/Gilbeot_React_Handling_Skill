

/* const INCREASE = 'counter/INCREASE'; //  모듈명/액션명
const DECREASE = 'counter/DECREASE';

export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

const initialState = {
    number: 0
}

function counter( state = initialState, action ) {
    switch(action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            }
        case DECREASE:
            return {
                number: state.number -1
            }
        default:
            return state;
    }
}
export default counter; */

//////////////////////////

/* import { createActions } from 'redux-actions'

const INCREASE = 'counter/INCREASE'; //  모듈명/액션명
const DECREASE = 'counter/DECREASE';

export const increase = () => createActions(INCREASE)
export const decrease = () => createActions(DECREASE)

const initialState = {
    number: 0
}

function counter( state = initialState, action ) {
    switch(action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            }
        case DECREASE:
            return {
                number: state.number -1
            }
        default:
            return state;
    }
}
export default counter; */

////////////////////

import { createActions, handleActions } from 'redux-actions'

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => createActions(INCREASE)
export const decrease = () => createActions(DECREASE)

const initialState = {
    number: 0
}

const counter = handleActions(
{
    [INCREASE]: (state,action) => ({ number: state.number + 1}),
    [DECREASE]: (state,action) => ({ number: state.number - 1}),
},
    initialState,
)
    /* switch(action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            }
        case DECREASE:
            return {
                number: state.number -1
            }
        default:
            return state;
    }
} */
export default counter;