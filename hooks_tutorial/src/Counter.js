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


/* import { useReducer } from 'react';

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
export default Counter  */

//////////////////

/* import { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { number: 0 } // state의 초기값 설정
    }
    render() {
        const {number} = this.state; // state값을 가져옴.
        return (
        <div>
            <h1>{number}</h1>
            <button onClick = {()=> {this.setState({ number: number + 1 })}}>plus one</button> 
        </div>
        )// state값을 변경함.
    }
}
export default Counter; */


/* import { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { number: 0, negNumber:0 } 
    }
    render() {
        const { number, negNumber } = this.state;
        return (
        <div>
            <h1>plus:{number}</h1>
            <h2>minus:{negNumber}</h2>
            <button onClick = {()=> {this.setState({ number: number + 1, negNumber: negNumber - 1 })}}>plus and minus</button> 
        </div>
        )
    }
}
export default Counter;
// 버튼을 클릭하면 plus: 옆의 숫자는 1씩 증가하고, minus: 옆의 숫자는 1씩 감소함. */


/* 
import { Component } from 'react'

class Counter extends Component {
   state = { number: 0, negNumber:0 } 
    
    render() {
        const { number, negNumber } = this.state;
        return (
        <div>
            <h1>plus:{number}</h1>
            <h2>minus:{negNumber}</h2>
            <button onClick = {()=> {this.setState({ number: number + 1, negNumber: negNumber - 1 })}}>plus and minus</button> 
        </div>
        )
    }
}
export default Counter; */

///////////////////

/* import { Component } from 'react'

class Counter extends Component {
   state = { number: 0 } 
    
    render() {
        const { number } = this.state;
        return (
        <div>
            <h1>plus:{number}</h1>
            <button onClick = {()=> {this.setState({ number: number + 1}); 
                                    this.setState({ number: this.state.number + 1})}}>plus two</button> 
        </div>
        )
    }
}
export default Counter;
// 버튼을 클릭해도 숫자가 1씩 증가함. */

////////////////

/* import { Component } from 'react'

class Counter extends Component {
   state = { number: 0 } 
    
    render() {
        const { number } = this.state;
        return (
        <div>
            <h1>plus:{number}</h1>
            <button onClick = {()=> {this.setState( prevState => ({ number: prevState.number + 1}) );
                                     this.setState( prevState => ({ number: prevState.number + 1}) )}}>plus two</button> 
        </div>
        )
    }
}
export default Counter;
// 버튼을 클릭하면 숫자가 2씩 증가함. */

///////////////////////////

import { Component } from 'react'

class Counter extends Component {
   state = { number: 0 } 
    
    render() {
        const { number } = this.state;
        return (
        <div>
            <h1>plus:{number}</h1>
            <button onClick = {()=> {this.setState( { number: number + 1}, () => {console.log("setState was called")} )}}>plus one</button> 
        </div>
        )
    }
}
export default Counter;
// plus one 버튼을 클릭하면 숫자가 1 증가한후, 콘솔창에 setState was called가 출력됨.
