import "../css/NumberInput.scss";
import { InputProps } from "../types";

const NumberInput = (props: InputProps) => {
    return <>
    <div className="number-input">
        <label className="number-input__label">{props.label}</label>
        <input
            className="number-input__input" 
            type="number"
            placeholder={props.placeholder} 
            min={props.min}
            max={props.max}
            onChange={event => props.onChange(event)}
        />
        {props.icon && <img className="number-input__icon" src={props.icon}/>}
    </div>
    </>
}

export default NumberInput;