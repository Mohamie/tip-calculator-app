import { InputProps } from "../types";

const NumberInput = (props: InputProps) => {
    return <>
    <div className="input_wrapper">
        <label>{props.label}</label>
        <input 
            type="number"
            placeholder="0" 
            min={props.min}
            max={props.max}
            onChange={event => props.onChange(event)}
        />
    </div>
    </>
}

export default NumberInput;