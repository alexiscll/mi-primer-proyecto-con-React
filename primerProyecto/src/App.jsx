import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header'
import Main from './componentes/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <Main></Main>
    </>
  )
}

export default App
