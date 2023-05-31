/* import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import Info from './Info'
import {useState} from 'react'

function App() {
  const [visible , setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'hide' : 'show'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}

export default App;
// show 버튼을 누르면 콘솔창에 'callback is executed' / 'cleaned Up' / 'callback is executed'가 출력됨.
// hide 버튼을 누르면 콘솔창에 'cleaned Up'이 출력됨. */

///////////////////////

/* import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';

function App() {
  return <Counter />;
};
export default App; */

///////////////////

/* import logo from './logo.svg';
import './App.css';
import Info from './Info'

function App() {
  return <Info />;
};
export default App; */

///////////////////////

/* import logo from './logo.svg';
import './App.css';
import Average from './Average'

function App() {
  return <Average />;
};
export default App; */

////////////////////

/* import Info from './Info'

function App() {
  return <Info />
}
export default App; */

////////////////


/* function App() {
  return ( // 엘리먼트가 2개이므로 부모요소인<div>로 감싸줘야 함.
   <div>
      <h1>hello React</h1>
      <h2>Work it</h2>
    </div>  
  )
}
export default App;
 */

/* 
import {Fragment} from 'react';

function App() { // <div>대신 <Fragment>로 감싸줘도 됨.
  return (
    <Fragment>
      <h1>hello React</h1>
      <h2>Work it</h2>
    </Fragment>
  )
}
export default App; */




/* function App() { 
  return (
    <>
      <h1>hello React</h1>
      <h2>Work it</h2>
    </>
  )
}
export default App; */


/* function App() {
  const name = "React"
  
  return (
    <>
      <h1>hello {name}</h1>
      <h2>work it?</h2>
    </>
  )
}
export default App; */


//////////////


/* function App() {
  const name = "React"
  
  return (
    <div>
      {name === 'React' ? (<h1>This is React</h1>) : (<h2>This is not React</h2>)}
    </div>
  )
}
export default App; */

////////////////

/* function App() {
  const name = "React"
  
  return (
    <div>
      {name === 'React' ? (<h1>This is React</h1>) : null }
    </div>
  )
}
export default App; */


/*  function App() {
  const name = "React"
  
  return (
    <div>
      {name === 'React' && (<h1>This is React</h1>) }
    </div>
  )
}
export default App; 
// 화면에 This is React가 출력됨. */


/* function App() {
  const name = false
  
  return (
    <div>
      {name  && (<h1>This is React</h1>) }
    </div>
  )
}
export default App;
// 화면에 아무것도 나타나지 않음. */


/* function App() {
  const name = undefined
  
  return (
    <div>
      {name  && (<h1>This is React</h1>) }
    </div>
  )
}
export default App;
// 화면에 아무것도 나타나지 않음. */


/* function App() {
  const name = null
  
  return (
    <div>
      {name  && (<h1>This is React</h1>) }
    </div>
  )
}
export default App;
// 화면에 아무것도 나타나지 않음. */


/* function App() {
  const name = 0
  
  return (
    <div>
      {name  && (<h1>This is React</h1>) }
    </div>
  )
}
export default App;
// 화면에 0이 출력됨. */

////////////////

/*  function App() {
  const name = undefined;
  return name;
}
export default App; */

/////////////////


/* function App() {
  const name = false;
  return name || 'name is falsy';
}
export default App;
// 화면에 name is falsy가 출력됨.


function App() {
  const name = undefined;
  return name || 'name is falsy';
}
export default App;
// 화면에 name is falsy가 출력됨.


function App() {
  const name = null;
  return name || 'name is falsy';
}
export default App;
// 화면에 name is falsy가 출력됨.


function App() {
  const name = 0;
  return name || 'name is falsy';
}
export default App;
// 화면에 name is falsy가 출력됨. */

///////////////////

/* function App() {
  const name="React"
  const styles= {
    backgroundColor:'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  }
  return <div style={styles}>{name}</div>
}
export default App; */


/* function App() {
  const name="React"

  return <div style={{
    backgroundColor:'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  }}>{name}</div>
}
export default App; */


/* import './App.css'

function App() {
  const name="React"
  return <div className="reverse">{name}</div>
}
export default App; */

//////////////


/* function App() {
  return (
    <input> // 오류 발생
  )
}
export default App; */



/* function App() {
  return (
    <input/> 
  )
}
export default App; */


/* function App() {
  return(
    <>
    <input /> 
    </>
  )
}
export default App; */


//////////////


/* 
function App() {
  return <div>Hello</div>
}
export default App; 
*/


/* import { Component } from 'react'

class App extends Component{
  render() {
    return <div>Hello</div>
  }
}
export default App; */

//////////////

/* import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent name="Seongjin" />;
} 
export default App; */


////////////////

/* import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent />;
} 
export default App; */

///////////

/* import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent>New York</MyComponent>;
} 
export default App; */

///////////////

/* import MyComponent from "./MyComponent"

const App = () => {
  return <MyComponent name="Seongjin"/>;
} 
export default App; */


/* import Counter from "./Counter"

const App = () => {
  return <Counter />;
} 
export default App */


/* import EventHandling from './EventHandling'

const App = () => {
  return <EventHandling />;
} 
export default App */


/* import EventPractice from './EventPractice'

const App = () => {
  return <EventPractice />;
} 
export default App */

/* import { Component } from 'react';
import Validation from './Validation'

class App extends Component {
  render(){
    return (
      <Validation />
    )
  }
}
export default App */


/* import { Component } from 'react';
import ScrollBox from './ScrollBox'

class App extends Component {
  render(){
    return (
      <div>
      <ScrollBox ref = {(ref) => this.hello = ref}/>
      <button onClick={() => this.hello.scrollToBottom()}>
        down
      </button>
      </div>
    )
  }
}
export default App */

import { Component } from 'react';
import Iteration from './Iteration'

class App extends Component {
  render(){
    return (
      <Iteration />
    )
  }
}
export default App