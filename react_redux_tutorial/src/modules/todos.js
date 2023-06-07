/* const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
})

let id = 3
export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
})

export const toggle = id => ({
    type: TOGGLE,
    id
})

export const remove = id => ({
    type: REMOVE,
    id
})


const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: 'To study redux',
            done: true
        },
        {
            id: 2,
            text: 'To use redux',
            done: false
        },
    ]
}


function todos(state = initialState, action) {
    switch(action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? {...todo, done: !todo.done} : todo
                    )
                }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        default:
            return state;
        }
    }
export default todos; */

//////////////////

import {createAction, handleActions} from 'redux-actions'

const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

export const changeInput = createAction(CHANGE_INPUT, input => input)

/*
export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
})
*/

let id = 3
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false
}))

/* let id = 3
export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
}) */

export const toggle = createAction(TOGGLE, id => id)

/* export const toggle = id => ({
    type: TOGGLE,
    id
}) */

export const remove = createAction(REMOVE, id => id)

/* export const remove = id => ({
    type: REMOVE,
    id
}) */



const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: 'To study redux',
            done: true
        },
        {
            id: 2,
            text: 'To use redux',
            done: false
        },
    ]
}


const todos = handleActions(
    {

            [CHANGE_INPUT]: (state, {payload: input}) => ({...state, input }),
            
            /* case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            }; */

            [INSERT]: (state, {payload: todo}) => ({
                ...state,
                todos: state.todos.concat(todo),
            }),

/*         case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }; */

            [TOGGLE]: (state, {payload: id}) => ({
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === id ? {...todo, done: !todo.done} : todo,
                    ),
            }), 
/*             [TOGGLE]: (state, {payload: id}) => produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done
            }) */



/*         case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? {...todo, done: !todo.done} : todo
                    )
                } */

                [REMOVE]: (state, {payload: id}) => ({
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== id),
                }),
        

/*         case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            } */
    
    },

    initialState
)
export default todos;





        


