import { useEffect, useState } from "react";
import NumberInput from "./NumberInput";
import "../css/TipSection.scss";

const TipSection = (props: {tip: number, onTipChange: Function}) => {
  const { tip: tipPercentage, onTipChange } = props; 
  const [isCustom, setIsCustom] = useState(false)

  const PercentageButton = (props: any) => {
    return <>
      <button 
        className={`${tipPercentage === props.percentage ? '--selected' : ''}`} 
        onClick={() => {
          setIsCustom(false)
          onTipChange(props.percentage)}
        }>
        {props.label}
      </button>
    </>
  }
  
  return <>
      <div className="tip-section">
        <p className="tip-section__heading">Select Tip %</p>
        <div className="tip-section__bill_buttons">  
          <PercentageButton
              label="5%"
              percentage={.05}
          />
          
          <PercentageButton
              label="10%"
              percentage={.10}
          />
          
          <PercentageButton
              label="15%"
              percentage={.15}
          />
          
          <PercentageButton
              label="25%"
              percentage={.25}
          />

          <PercentageButton
              label="50%"
              percentage={.50}
          />
          <NumberInput
            min={0} 
            max={100} 
            placeholder="Custom"
            value={isCustom ? tipPercentage * 100 : 0}
            onChange={(event) => {
              setIsCustom(true)
              onTipChange(+event.currentTarget.value / 100)
            }}/>
        </div>
      </div>
    </>
}



export default TipSection;