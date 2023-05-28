/* import { useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = event => {
        setName(event.target.value)
    }

    const onChangeNickname = event => {
        setNickname(event.target.value)
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    )
}
export default Info; */


/////////////////////////////


/* import { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=> {
        console.log('callback is executed')
    }, [])

    const onChangeName = event => {
        setName(event.target.value)
    }

    const onChangeNickname = event => {
        setNickname(event.target.value)
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    )
}
export default Info;
// 컴포넌트가 맨 처음 화면에 렌더링 될때만 콘솔 창에 'callback is executed'가 출력됨. 

// 'name' input창에 내용을 입력해도 'callback is executed'가 출력되지 않음.
// 'nickname' input창에 내용을 입력해도 'callback is executed'가 출력되지 않음.
 */


/* 
import { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=> {
        console.log('callback is executed')
    }, [name])

    const onChangeName = event => {
        setName(event.target.value)
    }

    const onChangeNickname = event => {
        setNickname(event.target.value)
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    )
}
export default Info;
// 컴포넌트가 맨 처음 화면에 렌더링 될때 콘솔 창에 'callback is executed'가 출력됨.

// 'name' input창에 내용을 입력할 경우 'callback is executed'가 계속 출력됨.
// 'nickname' input창에 내용을 입력할 경우 'callback is executed'가 출력되지 않음.
 */


/* import { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=> {
        console.log('callback is executed')
    }, [nickname])

    const onChangeName = event => {
        setName(event.target.value)
    }

    const onChangeNickname = event => {
        setNickname(event.target.value)
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    )
}
export default Info;
// 컴포넌트가 맨 처음 화면에 렌더링 될때 콘솔 창에 'callback is executed'가 출력됨.

// 'name' input창에 내용을 입력할 경우 'callback is executed'가 출력되지 않음. 
// 'nickname' input창에 내용을 입력할 경우 'callback is executed'가 계속 출력됨. */


/* import { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=> {
        console.log('callback is executed')
    }, [name, nickname])

    const onChangeName = event => {
        setName(event.target.value)
    }

    const onChangeNickname = event => {
        setNickname(event.target.value)
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    )
}
export default Info;
// 컴포넌트가 맨 처음 화면에 렌더링 될때 콘솔 창에 'callback is executed'가 출력됨.

// 'name' input창에 내용을 입력할 경우 'callback is executed'가 계속 출력됨.
// 'nickname' input창에 내용을 입력할 경우 'callback is executed'가 계속 출력됨. */



/* import { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=> {
        console.log('callback is executed ', name)
        return () => console.log('cleaned Up ', name)
    }, [name])

    const onChangeName = event => {
        setName(event.target.value)
    }

    const onChangeNickname = event => {
        setNickname(event.target.value)
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    )
}
export default Info;
// 'name' input창에 'kim'을 입력하면 cleaned Up / callback is executed  k / cleaned Up  k / callback is executed  ki /  cleaned Up  ki  / callback is executed  kim이 출력됨.  */



/* import { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}


const Info = () => {
    const [state, dispatch] = useReducer(reducer, {name: '', nickname: ''})
    const {name, nickname} = state;
    
    const changed = event => {dispatch(event.target)}

    return(
        <div>
            <div>
                <input name="name" value={name} onChange={changed} />
                <input name="nickname" value={nickname} onChange={changed} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    )
}
export default Info; */


/////////////////


import useInput from './useInput';


const Info = () => {

    const [state, changed] = useInput({name:'', nickname:''})
    const {name, nickname} = state;
    
    return(
        <div>
            <div>
                <input name="name" value={name} onChange={changed} />
                <input name="nickname" value={nickname} onChange={changed} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    )
}
export default Info;
