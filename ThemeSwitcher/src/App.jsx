
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darktheme = ()=>{
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }



  //actual change in theme 
  useEffect(() => {
    const element = document.querySelector('html');
    element.classList.remove("light", "dark")
    element.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darktheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                 <Card/>
              </div>
          </div>
      </div>
      </ThemeProvider>

  )
}

export default App
