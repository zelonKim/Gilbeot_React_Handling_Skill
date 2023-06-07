/* import {connect} from 'react-redux';
import {changeInput, insert, toggle, remove} from '../modules/todos'
import Todos from '../components/Todos'

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
        )
    }

    export default connect(
        ({todos}) => ({
            input: todos.input,
            todos: todos.todos,
        }),
        {
            changeInput,
            insert,
            toggle,
            remove
        },
    )(TodosContainer) */

/////////////////////////////

/* import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {changeInput, insert, toggle, remove} from '../modules/todos'
import Todos from '../components/Todos'

const TodosContainer = () => {
    const { input, todos } = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }))

const dispatch = useDispatch();
const onChangeInput = useCallback(input => dispatch(changeInput(input)), [
    dispatch
])
const onInsert = useCallback(text => dispatch(insert(text)), [dispatch])
const onToggle = useCallback(id => dispatch(insert(id)), [dispatch])
const onRemove = useCallback(id => dispatch(insert(id)), [dispatch])

return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
        )

    }
    export default TodosContainer */

//////////////////////


import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {changeInput, insert, toggle, remove} from '../modules/todos'
import Todos from '../components/Todos'
import useActions from '../lib/useActions';

const TodosContainer = () => {
    const { input, todos } = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }))


const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
)

return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
        )

    }
    export default TodosContainer
      