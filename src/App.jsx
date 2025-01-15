import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Testing from './Components/Testing'
import Homepage from './Pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
     
    //   <h1>Blogging Platform with Markdown Support</h1>
      
    // </>
    <BrowserRouter>
    <Routes>
      <Route path="/test" element={<Testing />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/" element={ <h1 className=' text-center text-3xl font-bold underline text-green-800'>Blogging Platform with Markdown Support</h1>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
