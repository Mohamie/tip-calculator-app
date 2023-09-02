import { BillSummaryProps } from "../types";
import "../css/BillSummary.scss";


const BillSummary = (props: BillSummaryProps) => {
    const { tipPerPerson, billPerPerson } = props;
    return <>
        <div className="bill-summary">
            <div className="bill-summary__line">
                <p className="text">Tip Amount <span><br />/ person</span></p>
                <p className="amount">
                    <span>$</span>{(tipPerPerson).toFixed(2)}
                </p>
            </div>
            <div className="bill-summary__line">
                <p className="text">Total <span><br />/ person</span></p>
                <p className="amount">
                    <span>$</span>{(billPerPerson + tipPerPerson).toFixed(2)}
                </p>
            </div>

            <button className={`bill-summary__btn ${!tipPerPerson || !billPerPerson ? '--disabled': ''}`}>
                Reset
            </button>
        </div>
    </>
}

export default BillSummary;