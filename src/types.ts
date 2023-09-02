export type Action = {
    type: "BILL" | "TIP" | "NUMBER_OF_PEOPLE" | "TOTAL_SUMMARY",
    value: number
}

export type BillCalculations = {
    billAmount: number,
    tipPercentage: number,
    numberOfPeople: number,
    tipPerPerson: number,
    billPerPerson: number,
}

export type BillSummaryProps = {
    tipPerPerson: number,
    billPerPerson: number,
}

export type InputProps = {
    label?: string;
    placeholder?: string;
    value?: number;
    min?: number,
    max?: number,
    onChange: (inputEvent: React.FormEvent<HTMLInputElement>) => void;
    icon?: string; 
}