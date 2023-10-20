import React, { useId } from "react";
import "../css/CurrencyInput.css";
export function CurrencyInput({
    label,
    currencyOptions = [],
    disabled = false,
    amount,
    setAmount,
    currency = "usd",
    setCurrency,
}) {
    const amountId = useId();
    const currencyId = useId();

    return (
        <div className="CurrencyInput">
            <div className="currency">
                <label htmlFor={currencyId} className="mini-text">
                    Currency
                </label>
                <select
                    id={currencyId}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <div className="amount">
                <label htmlFor={amountId} className="mini-text">
                    {label}
                </label>
                <input
                    type="number"
                    id={amountId}
                    min="0"
                    value={amount}
                    placeholder="Amount"
                    onChange={(e) => setAmount(Number(e.target.value))}
                    disabled={disabled}
                />
            </div>
        </div>
    );
}
