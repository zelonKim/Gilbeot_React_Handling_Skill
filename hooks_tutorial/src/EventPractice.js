/*
 import { Component } from 'react';

class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>Let's practice</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="please write"
                    onChange={
                        (e) => console.log(e.target.value)
                    }
                />
            </div>
        )
    }
}
export default EventPractice; */

/* import { Component } from 'react';

class EventPractice extends Component {
    state = {message:''}

    render() {
        return(
            <div>
                <h1>Let's practice</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="please write"
                    value={this.state.message}
                    onChange={
                        (e) => this.setState({
                            message: e.target.value
                        })
                    }
                />
            </div>
        )
    }
}
export default EventPractice;  */

////////////////////

/* import { Component } from 'react';

class EventPractice extends Component {
    state = {message:''}

    render() {
        return(
            <div>
                <h1>Let's practice</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="please write"
                    value={this.state.message}
                    onChange={
                        (e) => this.setState({
                            message: e.target.value
                        })
                    }
                />
                <button onClick={
                    () => {
                        alert(this.state.message)
                        this.setState({ message: ''})
                        }
                    }>confirm</button>   
            </div>
        )
    }
}
export default EventPractice;  */

/////////////

/* import { Component } from 'react';

class EventPractice extends Component {
    state = {message:''}

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleClick() {
        alert(this.state.message)
        this.setState({ message: '' })
    }
    
    render() {
        return(
            <div>
                <h1>Let's practice</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="please write"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>confirm</button>   
            </div>
        )
    }
}
export default EventPractice;  
*/

//////////////////

/* import { Component } from 'react';

class EventPractice extends Component {
    state = {message:''}


    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.message)
        this.setState({ message: '' })
    }
    
    render() {
        return(
            <div>
                <h1>Let's practice</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="please write"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>confirm</button>   
            </div>
        )
    }
}
export default EventPractice;   */

////////////////////

/* import { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message)
        this.setState({ username: '', message: '' })
    }
    
    render() {
        return(
            <div>
                <h1>Let's practice</h1>
                <input 
                    type="text"
                    name="username"
                    placeholder="please write username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder="please write message"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>confirm</button>   
            </div>
        )
    }
}
export default EventPractice;   */

//////////////


/* import { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message)
        this.setState({ username: '', message: '' })
    }
    
    handleKeyPress = (e) => {
        if(e.key === "Enter") {
            this.handleClick();
        }
    }


    render() {
        return(
            <div>
                <h1>Let's practice</h1>
                <input 
                    type="text"
                    name="username"
                    placeholder="please write username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder="please write message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>confirm</button>   
            </div>
        )
    }
}
export default EventPractice;  
// message input창에 내용을 입력한 후, 엔터키를 누르면 confirm버튼을 클릭한 것과 같이 알림창이 뜸. */


///////////////////











/* import {useState} from 'react'

const EventPractice = () => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('');

    const onChangeUsername = e => setUsername(e.target.value)
    const onChangeMessage = e => setMessage(e.target.value)

    const onClick = () => {
        alert(username + ": " + message)
        setUsername('');
        setMessage('')
    }

    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    }

        return(
            <div>
                <h1>Let's practice</h1>
                <input 
                    type="text"
                    name="username"
                    placeholder="please write username"
                    value={username}
                    onChange={onChangeUsername}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder="please write message"
                    value={message}
                    onChange={onChangeMessage}
                    onKeyDown={onKeyPress}
                />
                <button onClick={onClick}>confirm</button>   
            </div>
        )
    }
export default EventPractice;  */ 


////////////////////////////

import {useState} from 'react'

const EventPractice = () => {
    const [form, setForm] = useState({
        username:'',
        message: '',
    })

    const {username, message } = form;

    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용을 복사함.
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌움.
        }
        setForm(nextForm);
    }

    const onClick = () => {
        alert(username + ": " + message)
        setForm({
            username: '',
            message: ''
        });
    }

    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    }

        return(
            <div>
                <h1>Let's practice</h1>
                <input 
                    type="text"
                    name="username"
                    placeholder="please write username"
                    value={username}
                    onChange={onChange}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder="please write message"
                    value={message}
                    onChange={onChange}
                    onKeyDown={onKeyPress}
                />
                <button onClick={onClick}>confirm</button>   
            </div>
        )
    }
export default EventPractice; 