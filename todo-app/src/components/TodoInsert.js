import { MdAdd } from 'react-icons/md'
import { useState, useCallback } from 'react'
import './TodoInsert.scss'

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e=> { // 리렌더링 될 때마다 만들어둔 함수를 재사용함.
        setValue(e.target.value);
    }, [])

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        }, [onInsert, value]
    )

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="please write your To-Do" 
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}
export default TodoInsert
