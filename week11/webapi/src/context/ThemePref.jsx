import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);


// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {


  const [theme, setTheme] = useState('dark')

  const [userInfo, setUserInfo] = useState({
    name: "Jane",
    token: "djdjkdscneuee9339-e838-303oi3w-sklseio344i83i3n3i8wnseuebe3"
  })


  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }, [userInfo])



  return (
    <ThemeContext.Provider value={{ theme, setTheme, userInfo, setUserInfo }}>
      {children}
    </ThemeContext.Provider>
  )
}


export default ThemeProvider;