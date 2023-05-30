import { useState } from 'react';

const EventHandling = () => {
    const [message, setMessage] = useState('')
    const Entering = () => setMessage("It was executed")
    
    return (
        <div>
            <button onClick={Entering}>Click Me</button>
            <div>{message}</div>
        </div>
    )
}
export default EventHandling;