/* import {useState, useRef, useCallback} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([
      {
        id:1,
        text: 'To study React',
        checked: true,
      },
      {
        id:2,
        text: 'To style component',
        checked: true,
      },
      {
        id: 3,
        text: 'To make a schedule manage app',
        checked: false
      },
    ])

    const nextId = useRef(4)

    const onInsert = useCallback(
      text => {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };

        setTodos(todos.concat(todo));
        nextId.current += 1
      }, [todos]
    )
    
      const onRemove = useCallback(
        id => {
          setTodos(todos.filter(todo => todo.id !== id));
        },
        [todos],
      )

        const onToggle = useCallback(
          id => {
            setTodos(
              todos.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked }: todo,
                )
            )
          },
          [todos],
        )

  return (
   <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
   </TodoTemplate>
  );
}
export default App; */

///////////////////


/* 
const onInsert = useCallback(
  text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    setTodos(todos => todos.concat(todo));
    nextId.current += 1
  }, []
)

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [],
  )

    const onToggle = useCallback(
      id => {
        setTodos(todos =>
          todos.map(todo =>
            todo.id === id ? { ...todo, checked: !todo.checked }: todo,
            )
        )
      },
      [],
    )
// useState 세터함수의 인수에 현재 상태를 매개변수로 한 '콜백함수'를 전달해줌. (useCallback의 의존성 배열은 빈 배열로 설정함.)
 */


/////////////////////////////


import {useReducer, useRef, useCallback} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array=[];
  for (let i = 1; i<= 2500; i++) {
    array.push({
      id:1,
      text: `Todo ${i}`,
      checked: false
    })
  }
  return array;
}

function todoReducer(todos, action) {
  switch(action.type) {
    case 'INSERT':
      return todos.concat(action.todo);

    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id)
    
      case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked }: todo,)
   
      default:
      return todos; 
  }
}

function App() {
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
      // 두번째 매개변수에 undefined를 넣어주어 컴포넌트가 맨 처음 렌더링 될때만 createBulkTodos함수가 호출되도록함.

    const nextId = useRef(2501)

    const onInsert = useCallback(text => {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };
        dispatch({type: 'INSERT', todo});
        nextId.current += 1
      }, [])
  
      const onRemove = useCallback(id => {
          dispatch({type:'REMOVE', id});
        }, [])
       
        const onToggle = useCallback(id => {
          dispatch({type:'TOGGLE', id})
          }, [])

  return (
   <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
   </TodoTemplate>
  );
}
export default App;


