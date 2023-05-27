/*
 import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0); // 

  return (
  <div>
    <p> 현재 카운터 값은 {value} 입니다. </p>
    <button onClick = { ()=>setValue(value +1) }> plus one </button>
    <button onClick = { ()=>setValue(value -1) }> minus one </button>
  </div>
  );
};
export default Counter 
*/

//////////////////////


import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) { // type에 따라 다른 작업을 수행함. 
        case 'increment':
            return {value: state.value + 1};
        case 'decrement':
            return {value: state.value - 1};
        default:
            return state; // 아무것도 해당되지 않을 때는 기존 상태를 반환함.
    }
}



const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick = { () => dispatch({ type: 'increment'}) }> plus one </button>
            <button onClick = { () => dispatch({ type: 'decrement'}) }> minus one </button>
  </div>
  );
};
export default Counter 