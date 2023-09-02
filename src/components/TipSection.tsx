import { useEffect, useState } from "react";
import NumberInput from "./NumberInput";

const TipSection = (props: {onTipChange: Function}) => {
  const [tipPercentage, setTipPercentage] = useState(0); 

  useEffect(() => {
    props.onTipChange(tipPercentage);
  }, [tipPercentage])

  return <>
      <p>Select Tip %</p>
      <div className="bill_buttons">  
        <button onClick={() => setTipPercentage(.05)}>5%</button>
        <button onClick={() => setTipPercentage(.10)}>10%</button>
        <button onClick={() => setTipPercentage(.15)}>15%</button>
        <button onClick={() => setTipPercentage(.25)}>25%</button>
        <button onClick={() => setTipPercentage(.50)}>50%</button>
        <NumberInput
          min={0} 
          max={100} 
          placeholder="Custom"
          onChange={(event) => setTipPercentage(+event.currentTarget.value / 100)}/>
      </div>
    </>
}

export default TipSection;