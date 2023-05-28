/* import { useState } from 'react';

const getAverage = numbers => { console.log('평균값 계산중'); 
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}


const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const changed = event => { setNumber(event.target.value);};

    const inserted = event => { const nextList = list.concat(parseInt(number));
        setList(nextList)
        setNumber('')}

return (
    <div>
        <input value={number} onChange={changed} />
        <button onClick={inserted}>register</button>
        <ul>
            {list.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </ul>
        <div>
            <b>average:</b> {getAverage(list)} 
        </div>
    </div>
    )
}
export default Average;
// input창에 내용을 입력할때마다 콘솔창에 '평균값 계산중'이 출력됨. 
*/



 /* import { useState, useMemo } from 'react';

const getAverage = numbers => { console.log('평균값 계산중'); 
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const changed = event => { setNumber(event.target.value);};

    const inserted = event => { const nextList = list.concat(parseInt(number));
        setList(nextList)
        setNumber('')}

        const avg = useMemo(()=> getAverage(list), [list]); // list값이 바귀었을 때만 getAverage함수를 실행하고, list 값이 바뀌지 않았다면 이전의 결과를 재사용함.

return (
    <div>
        <input value={number} onChange={changed} />
        <button onClick={inserted}>register</button>
        <ul>
            {list.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </ul>
        <div>
            <b>average:</b> {avg} 
        </div>
    </div>
    )
} 
export default Average;
// input창에 내용을 입력하더라도 register 버튼을 눌러야만 콘솔창에 '평균값 계산중'이 출력됨. */



//////////////////////


/* import { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => { console.log('평균값 계산중'); 
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const changed = useCallback( event => {setNumber(event.target.value)}, [] ) // 컴포넌트가 처음 렌더링될때만 함수를 생성함.

    const inserted = useCallback( () => { const nextList = list.concat(parseInt(number));
        setList(nextList)
        setNumber('')
    }, [number, list]) // number 혹은 list가 바뀌었을 때만 함수를 생성함.

        const avg = useMemo(()=> getAverage(list), [list]); 

return (
    <div>
        <input value={number} onChange={changed} />

        <button onClick={inserted}>register</button>
        <ul>
            {list.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </ul>
        <div>
            <b>average:</b> {avg} 
        </div>
    </div>
    )
}
export default Average;  */

//////////////////


/* import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => { console.log('평균값 계산중'); 
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null) // 초기값이 null인 useRef 객체를 만듦.

    const changed = useCallback( event => {
        setNumber(event.target.value)}, [] ) 

    const inserted = useCallback( () => { const nextList = list.concat(parseInt(number));
        setList(nextList)
        setNumber('');
        inputEl.current.focus() // useRef를 통해 만든 객체안의 current값은 ref속성과 연결된 엘리먼트인 <input>을 가리킴. ->  register버튼을 눌렀을 때 포커스가 input창으로 넘어감.
    }, [number, list]) 

        const avg = useMemo(()=> getAverage(list), [list]); 

return ( // <input>는 ref속성과 연결된 엘리먼트임.
    <div> 
        <input value={number} onChange={changed} ref={inputEl}/> 
        <button onClick={inserted}>register</button>
        <ul>
            {list.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </ul>
        <div>
            <b>average:</b> {avg} 
        </div>
    </div>
    )
}
export default Average;
 */



