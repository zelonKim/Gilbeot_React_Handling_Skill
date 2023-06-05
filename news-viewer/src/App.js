/* import { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null);

  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response=> {
      setData(response.data);
    })
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>bring</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  )
}

export default App; */

///////////////////////

/* import { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null);

  const onClick = async() => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=b713e5b9826f4f049a27d2ffac3a7248')
      setData(response.data);
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>bring</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)}  />}
    </div>
  )
}

export default App;
 */

///////////////

/* import { useState, useCallback } from 'react'
import NewsList from './components/NewsList';
import Categories from './components/Categories'

const App = () => {
  const [category, setCategory] = useState('all')
  const onSelect = useCallback(category => setCategory(category), [])

  return(
    <>
    <Categories category={category} onSelect={onSelect}/>
    <NewsList category={category}/>
    </>
  )
}
export default App; */

////////////////

import { Route, Routes } from 'react-router-dom'
import NewsPage from './pages/NewPage'

function App() {
  return(
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  )
}
export default App;