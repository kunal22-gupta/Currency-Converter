import "./App.css";
import { CurrencyInput } from "./components/CurrencyInput";

function App() {
    return (
        <>
            <div className="container">
                <header>
                    <h1>Currency Converter</h1>
                </header>
                <main>
                    <CurrencyInput label="amount" />
                    <div className="swap">
                        <button>
                            <i class="ri-arrow-up-down-line"></i>
                        </button>
                    </div>
                    <CurrencyInput label="converted amount" />
                    <button className="convert">
                        Convert {} to {}
                    </button>
                </main>
                <footer>
                  <p className="mini-text">Indicative Exchange Rate</p>
                  <p>1 USD = 1.36 SGD</p>
                </footer>
            </div>
        </>
    );
}

export default App;
