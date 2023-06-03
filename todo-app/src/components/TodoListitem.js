import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss'
import cn from 'classnames' // 조건부 스타일링

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    const { id, text, checked } = todo;
    
    return ( // 프로퍼티로 받아온 style을 적용시켜줌.
        <div className="TodoListItem-virtualized" style={style}>
            <div className = "TodoListItem">
                <div
                    className={cn("checkbox", {checked})} 
                    onClick={() => onToggle(id)}
                    >
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                </div>        
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdCheckBoxOutlineBlank />
                </div>
            </div>
        </div>
    )
}
export default React.memo(TodoListItem);
