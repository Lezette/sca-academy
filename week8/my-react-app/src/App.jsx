import { useState, useEffect, useReducer } from 'react'
import './App.css'

import Themed from './components/ThemedContext'
import ThemeContext from './components/Theme'

function App () {

  const initialState = { count: 0 };

  function reducer (state, action) {

    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }




  // const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState(null)

  const [selectTheme, setSelectTheme] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      <ThemeContext.Provider value={selectTheme ? "light" : "dark"}>

        <Themed />
        <div>

          {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
          {/* <button onClick={() => setSelectTheme((selectTheme) => !selectTheme)}>Change Theme</button> */}
          {/* <button onClick={() => setSelectTheme((selectTheme) => !selectTheme)}>Change Theme</button> */}

          <p>Count: {state.count}</p>

          <button onClick={() => dispatch({ type: 'increment' })}>+</button>

          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>


          <input type="number" />

        </div>

      </ThemeContext.Provider>
    </>
  )
}

export default App
