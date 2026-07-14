import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ViewTeam from './components/ViewTeam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
