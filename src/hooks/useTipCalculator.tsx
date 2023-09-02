import { useReducer } from "react";
import { Action, BillCalculations } from "../types";

export const useTipCalculator = () => {
    const initialValue: BillCalculations = {
        billAmount: 0,
        tipPercentage: 0,
        numberOfPeople: 0,
        tipPerPerson: 0,
        billPerPerson: 0,
    };

    const [billCalculations, dispatch] = useReducer(reducer, initialValue)

    const setBill = (bill: number) => { dispatch({type: "BILL", value: bill}) }

    const setTip = (tip: number) => { dispatch({type: "TIP", value: tip}) }
    
    const setPeople = (numberOfPeople: number) => { dispatch({type: "NUMBER_OF_PEOPLE", value: numberOfPeople}) }

    return {billCalculations, setBill, setTip, setPeople}
}

const reducer = (state: BillCalculations, action: Action) => {
    let billPerPerson = 0;
    let tipPerPerson = 0;

    switch(action.type){
        case "BILL":
            const billAmount = action.value;
            
            if(state.numberOfPeople){
                tipPerPerson = billAmount * state.tipPercentage / state.numberOfPeople
                billPerPerson = billAmount / state.numberOfPeople
            }

            return {
                ...state, 
                billAmount, 
                tipPerPerson,
                billPerPerson
            }
            
        case "TIP":
            const tipPercentage = action.value;

            if(state.numberOfPeople){
                tipPerPerson = state.billAmount * tipPercentage / state.numberOfPeople
                billPerPerson = state.billAmount / state.numberOfPeople
            }

            return {
                ...state, 
                tipPercentage,
                tipPerPerson,
                billPerPerson
            }
            
        case "NUMBER_OF_PEOPLE":
            const numberOfPeople = action.value;

            if(numberOfPeople && numberOfPeople > 0){
                tipPerPerson = state.billAmount * state.tipPercentage / numberOfPeople
                billPerPerson = state.billAmount / numberOfPeople
            }

            return {
                ...state, 
                numberOfPeople,
                tipPerPerson,
                billPerPerson
            }
            
        default: 
            return {...state};

    }
}

//billAmount, tipPercentage, numberOfPeople

// billAmount * tipPercentage / numberOfPeople = tipPerPerson
// billAmount / numberOfPeople = billPerPerson