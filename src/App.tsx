import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <p>Bill</p>
        <input type="text"/>  
        
        <p>Select Tip %</p>
        <div className="bill_section">  
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
        </div>

        <p>Number of people</p>
        <input type="text"/>
        
        <div className="bill_summary">
          <div className="summary_line">
            <p>Tip Amount <span>/person</span></p>
            <p>$4.27</p>
          </div>
          <div className="summary_line">
            <p>Total <span>/person</span></p>
            <p>$32.79</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
