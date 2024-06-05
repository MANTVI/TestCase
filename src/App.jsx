import { useState } from 'react'
import FormComponent from './FormComponent';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <FormComponent />
    
    </>
  )
}

export default App
