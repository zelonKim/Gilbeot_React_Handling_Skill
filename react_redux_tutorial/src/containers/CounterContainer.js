/* import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increase, decrease } from '../modules/counter'
import {bindActionCreators} from 'redux'

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    )
}

export default connect(
    state => ({
        number: state.counter.number,
    }),
    dispatch => ({
        increase: () => {dispatch(increase())},
        decrease: () => {dispatch(decrease())}
    })
)(CounterContainer)
 */

/////////////////////

import {useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Counter from '../components/Counter'
import { increase, decrease } from '../modules/counter'


/* 
const CounterContainer = ({ number }) => {
    return (
        <Counter number={number}/>
    )
}
export default connect(
    state => ({
        number: state.counter.number,
    })(CounterContainer) 
*/


/* const CounterContainer = () => {
    const number = useSelector(state => state.counter.number)
    return (
        <Counter number={number}/>
    )
}
export default CounterContainer; */



//////////////////////////////



/* const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    )
}
export default connect(
    state => ({
        number: state.counter.number,
    }),
    dispatch => ({
        increase: () => {dispatch(increase())},
        decrease: () => {dispatch(decrease())}
    })
)(CounterContainer)
*/


/*     const CounterContainer = () => {
        const number = useSelector(state => state.counter.number)
        const dispatch = useDispatch()
        return (
            <Counter 
                number={number}
                onIncrease={()=>dispatch(increase())}
                onDecrease={()=>dispatch(decrease())}
            />
        )
    }
    export default CounterContainer; */



    const CounterContainer = () => {
        const number = useSelector(state => state.counter.number)
        const dispatch = useDispatch()

        const onIncrease = useCallback(() => dispatch(increase()), [dispatch])
        const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])
        
        return (
            <Counter 
                number={number}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
            />
        )
    }
    export default CounterContainer;   

