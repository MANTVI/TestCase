import { useState } from 'react'
import FormComponent from './FormComponent';
import Cards from './Cards';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="container">
            <div className="email">
              <FormComponent/>
            </div>
            <div className="card">
            <Cards />
            </div>
            
      </div>
      {/* <FormComponent /> */}
    
    </>
  )
}

export default App
