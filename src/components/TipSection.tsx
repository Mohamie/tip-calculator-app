import { useEffect, useState } from "react";
import NumberInput from "./NumberInput";
import "../css/TipSection.scss";

const TipSection = (props: {onTipChange: Function}) => {
  const [tipPercentage, setTipPercentage] = useState(0); 

  useEffect(() => {
    props.onTipChange(tipPercentage);
  }, [tipPercentage]);

  return <>
      <div className="tip-section">
        <p className="tip-section__heading">Select Tip %</p>
        <div className="tip-section__bill_buttons">  
          <PercentageButton
              tipPercentage={tipPercentage}
              setTipPercentage={setTipPercentage}
              label="5%"
              percentage={.05}
          />
          
          <PercentageButton
              tipPercentage={tipPercentage}
              setTipPercentage={setTipPercentage}
              label="10%"
              percentage={.10}
          />
          
          <PercentageButton
              tipPercentage={tipPercentage}
              setTipPercentage={setTipPercentage}
              label="15%"
              percentage={.15}
          />
          
          <PercentageButton
              tipPercentage={tipPercentage}
              setTipPercentage={setTipPercentage}
              label="25%"
              percentage={.25}
          />

          <PercentageButton
              tipPercentage={tipPercentage}
              setTipPercentage={setTipPercentage}
              label="50%"
              percentage={.50}
          />
          <NumberInput
            min={0} 
            max={100} 
            placeholder="Custom"
            onChange={(event) => setTipPercentage(+event.currentTarget.value / 100)}/>
        </div>
      </div>
    </>
}

const PercentageButton = (props: any) => {
  return <>
    <button 
      className={`${props.tipPercentage === props.percentage ? '--selected' : ''}`} 
      onClick={() => props.setTipPercentage(props.percentage)}
    >
      {props.label}
    </button>
  </>
}

export default TipSection;