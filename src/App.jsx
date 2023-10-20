import { useState } from "react";
import "./App.css";
import { CurrencyInput } from "./components/CurrencyInput";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");

    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const exchangeRates = useCurrencyInfo(from);

    const currencyOptions = Object.keys(exchangeRates);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount((amount / exchangeRates[to]).toFixed(4));
    };

    const convert = () => {
        setConvertedAmount((exchangeRates[to] * amount).toFixed(4));
    };

    return (
        <>
            <div className="container">
                <header>
                    <h1>Currency Converter</h1>
                </header>
                <main>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <CurrencyInput
                            label="amount"
                            amount={amount}
                            setAmount={setAmount}
                            currency={from}
                            setCurrency={setFrom}
                            currencyOptions={currencyOptions}
                        />
                        <div className="swap">
                            <button type="button" onClick={swap}>
                                <i className="ri-arrow-up-down-line"></i>
                            </button>
                        </div>
                        <CurrencyInput
                            label="converted amount"
                            amount={convertedAmount}
                            setAmount={setConvertedAmount}
                            currency={to}
                            setCurrency={setTo}
                            currencyOptions={currencyOptions}
                            disabled
                        />
                        <button className="convert" type="submit">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </main>
                <footer>
                    <p className="mini-text">Indicative Exchange Rate</p>
                    <p>
                        1 {from.toUpperCase()} = {exchangeRates[to]}{" "}
                        {to.toUpperCase()}
                    </p>
                </footer>
            </div>
        </>
    );
}

export default App;
