/* import { Component } from 'react'

class MyComponent extends Component {
    id = 1

    setId = (n) => {this.id = n;}
    
    printId = () => {console.log(this.id)}

    render() {
        return (
            <div>MyComponent</div>
        )
    }
}
export default MyComponent; */

//////////////

/* import { Component, useRef } from 'react'

const RefSample = () => {
    const id = useRef(1);

    const setId = (n) => { id.current = n; }

    const printId = () => { console.log(id.current) }

    return (
        <div>
            refsample
        </div>
    )
}
export default RefSample; */


////////////////////


/* const MyComponent = () => {
    return <div>My new Component</div>
}
export default MyComponent; */


/* const MyComponent = (props) => {
    return <div>hello, My name is {props.name}</div>
}
export default MyComponent; */


/* const MyComponent = (props) => {
    return <div>hello, My name is {props.name}</div>
}

MyComponent.defaultProps = {
    name: 'john'
}

export default MyComponent; */

//////////////////


/* const MyComponent = (props) => {
    return <div>This content is {props.children}</div>
}
export default MyComponent */

///////////////


const MyComponent = ({name}) => {
    return <div>hello, My name is {name}</div>
}
export default MyComponent; 


/* import { Component } from 'react';

class MyComponent extends Component {
    render() {
        const { name } = this.props;
        return (
            <div>Hello, My name is {name}</div>
        )
    }
}
export default MyComponent; */