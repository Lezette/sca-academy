
import './App.css'
import { useContext } from 'react'

import { ThemeContext } from './context/ThemePref'

function App () {



  const { setTheme, theme } = useContext(ThemeContext)

  return (
    <div>

      <label htmlFor="theme">Select Theme</label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)} id="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>


      <div className="mb-10">
        <FirstComp />
      </div>

    </div >
  )
}


const FirstComp = () => {

  const { userInfo } = useContext(ThemeContext)


  return (
    <div>


      <div>Hello {userInfo.name}</div>


      <SecondComp />
    </div>
  )
}

const SecondComp = () => {

  const { theme } = useContext(ThemeContext)



  return (
    <div>
      {theme === 'light' ? <div>The User prefers light mode</div> : <div>The User prefers dark mode</div>}
    </div>
  )
}

export default App
