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

import logo from './logo.svg';
import './App.css';
import Average from './Average'

function App() {
  return <Average />;
};
export default App;