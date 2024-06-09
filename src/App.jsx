import { useState } from 'react'
import Cards from './Cards';
import './CSS/App.css'
import Email from './Email';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="container">
            <div className="email">
             {<Email/>}
            </div>
            <div className="cardss">
            {<Cards />}
            </div>
            
      </div>
      
    
    </>
  )
}

export default App
