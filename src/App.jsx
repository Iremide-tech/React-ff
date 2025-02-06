import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-red-600'>Hello world</h1>
    <h2 className='text-amber-400'> I am here</h2>
    </>
  )
}

export default App
