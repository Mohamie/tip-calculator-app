import { BillSummaryProps } from "../types";

const BillSummary = (props: BillSummaryProps) => {
    const { tipPerPerson, billPerPerson } = props;
    return <>
        <div className="bill_summary">
            <div className="summary_line">
                <p>Tip Amount <span>/person</span></p>
                <p>${(tipPerPerson).toFixed(2)}</p>
            </div>
            <div className="summary_line">
                <p>Total <span>/person</span></p>
                <p>${(billPerPerson + tipPerPerson).toFixed(2)}</p>
            </div>

            <button>Reset</button>
        </div>
    </>
}

export default BillSummary;