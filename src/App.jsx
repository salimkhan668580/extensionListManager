import React, { useState } from 'react'
import Header from './Components/Header'
import CardContainer from './Components/CardContainer'

function App() {
  const [theme, setTheme] = useState("light");
  return (
  <div className={`${theme=="light"?"bg-light-gradient":"bg-dark-gradient"} !min-h-screen md:px-[200px] px-[30px]`}>
    <div className='pt-[25px]'>

  <Header  theme={theme} setTheme={setTheme}/>
    </div>
    <CardContainer  theme={theme}/>
  </div>
  )
}

export default App