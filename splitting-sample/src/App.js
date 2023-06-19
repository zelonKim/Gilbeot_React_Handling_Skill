/* import logo from './logo.svg';
import './App.css';
import notify from './notify'; // import를 상단에서 함.

function App() {
  const onClick = () => {
    notify() // 빌드했을 때 notify코드가 main파일 안에 들어가게 됨.
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}> Hello React </p>
      </header>
    </div>
  );
}

export default App; */

//////////////////////

/* import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = () => { // import()함수 형태로 메서드 안에서 사용함.
    import('./notify').then(result => result.default()) // 파일을 따로 분리시켜서 저장함. -> 실제 함수가 필요한 지점에 파일을 불러옴.
  } // impor()함수는 Promise를 반환함.
  // import()함수를 통해 모듈을 불러올때 모듈에서 내보낸 것은 result.default로 참조해서 사용함.
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}> Hello React </p>
      </header>
    </div>
  );
}
export default App; */



///////////////////////



// state를 사용한 코드 스플리팅
/* import {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    SplitMe: null
  }

  handleClick = async() => {
    const loadedModule = await import('./SplitMe')
    this.setState({
      SplitMe: loadedModule.default
    })
  }

  render() {
    const {SplitMe} = this.state

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p onClick={this.handleClick}> Hello React </p>
            {SplitMe && <SplitMe />}
        </header>
      </div>
   )
  }
}
export default App; */

////////////////////

/* import React from 'react'
import { useState, Suspense } from 'react'
import logo from './logo.svg';
import './App.css';

const SplitMe = React.lazy(()=> import('./SplitMe'))

function App() {
  const [visible,setVisible] = useState(false)
  const onClick = () => {
    setVisible(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p onClick={onClick}>Hello React</p>

      <Suspense fallback={<div>loading...</div>}>
        {visible && <SplitMe />}
      </Suspense>

      </header>
    </div>
  )
}
export default App; */

/////////////////

import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component'

const SplitMe = loadable(()=> import('./SplitMe'), {fallback: <div>loading...</div>})

function App() {
  const [visible, setVisible] = useState(false)

  const onClick = () => {
    setVisible(true)
  }

  const onMouseOver = () => {
    SplitMe.preload()
  }

  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}> Hello React </p>
        {visible && <SplitMe />}
      </header>
    </div>
  )
}
export default App;