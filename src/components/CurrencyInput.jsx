import React, { useId } from "react";
import "../css/CurrencyInput.css";
export function CurrencyInput({ label }) {
    const amountId = useId();
    const currencyId = useId();

    return (
        <div className="CurrencyInput">
            <div className="currency">
                <label htmlFor={currencyId} className="mini-text">Currency</label>
                <select id={currencyId}>
                    <option value="usd">usd</option>
                    <option value="inr">inr</option>
                    <option value="yen">yen</option>
                    <option value="hey">Hey</option>
                </select>
            </div>
            <div className="amount">
                <label htmlFor={amountId} className="mini-text">{label}</label>
                <input
                    type="number"
                    id={amountId}
                    min="0"
                />
            </div>
        </div>
    );
}
