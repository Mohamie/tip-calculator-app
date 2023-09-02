import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NumberInput from './components/NumberInput'
import TipSection from './components/TipSection'
import BillSummary from './components/BillSummary'
import { useTipCalculator } from './hooks/useTipCalculator'

function App() {
  const {billCalculations, setBill, setTip, setPeople} = useTipCalculator();


  return (
    <>
      <div className="card">
        <NumberInput 
          label="Bill" 
          value={billCalculations.billAmount}
          onChange={(event) => setBill(+event.currentTarget.value)}/>
        
        <TipSection onTipChange={setTip}/>
        
        <NumberInput 
          label="Number of People" 
          onChange={(event) => setPeople(+event.currentTarget.value)}
          value={billCalculations.numberOfPeople}/>
        
        <BillSummary 
          tipPerPerson={billCalculations.tipPerPerson}
          billPerPerson={billCalculations.billPerPerson}/>
      </div>
    </>
  )
}

export default App
