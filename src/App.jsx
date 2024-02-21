import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider} from './context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';


function App() {
  const[themeMode,setThemeMode]=useState('light')

  const lightMode=()=>{
    setThemeMode('light')
  }
  const darkMode=()=>{
    setThemeMode('dark')
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return(
    <ThemeProvider value={{themeMode,lightMode,darkMode}}>
      <div className='p-3 bg-pink-500 text-center'>
      <h1>This is js</h1>
      </div>
      <ThemeBtn/>
      
      <Card/>

    </ThemeProvider>
  
  )
}

export default App
