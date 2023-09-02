import personIcon from "./assets/icon-person.svg";
import moneyIcon from "./assets/icon-dollar.svg";
import './App.scss'
import NumberInput from './components/NumberInput'
import TipSection from './components/TipSection'
import BillSummary from './components/BillSummary'
import { useTipCalculator } from './hooks/useTipCalculator'

function App() {
  const {billCalculations, setBill, setTip, setPeople} = useTipCalculator();


  return (
    <>
    <h1>Spli<br />tter</h1>
    <div className="card">
      <div className="inputs">
        <NumberInput 
          label="Bill" 
          placeholder="0"
          icon={moneyIcon}
          value={billCalculations.billAmount}
          onChange={(event) => setBill(+event.currentTarget.value)}/>
        
        <TipSection onTipChange={setTip}/>
        
        <NumberInput 
          label="Number of People" 
          placeholder="0"
          icon={personIcon}
          onChange={(event) => setPeople(+event.currentTarget.value)}
          value={billCalculations.numberOfPeople}/>
        
      </div>
      <div className="summary">
        <BillSummary 
          tipPerPerson={billCalculations.tipPerPerson}
          billPerPerson={billCalculations.billPerPerson}/>
      </div>
    </div>
    </>
  )
}

export default App
