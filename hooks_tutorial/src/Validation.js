/* import {Component} from 'react';
import './Validation.css'

class Validation extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false,
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
    }

    render() {
        return(
            <div>
            <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            className={this.state.clicked ? (this.state.validated ? 'success': 'failure'): ''}
            />
            <button onClick={this.handleButtonClick}> validate </button>
            </div>
            )
    }
}
export default Validation; */

////////////////

import React from 'react';
import {Component} from 'react';
import './Validation.css'

class Validation extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false,
    }

    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus()
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
    }

    render() {
        return(
            <div>
            <input
            ref={this.input}
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            className={this.state.clicked ? (this.state.validated ? 'success': 'failure'): ''}
            />
            <button onClick={this.handleButtonClick}> validate </button>
            </div>
            )
    }
}
export default Validation;