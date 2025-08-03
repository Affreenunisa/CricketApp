import React, { useState } from "react";

const EURO_RATE = 80; // 1 Euro = 80 INR (Update as needed)

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!rupees || isNaN(rupees) || Number(rupees) <= 0) {
      setResult("Enter a valid Rupees amount.");
      return;
    }
    const euroValue = (parseFloat(rupees) / EURO_RATE).toFixed(2);
    // Synthetic event and alert demo
    window.alert(`Converting to Euro. Amount is ${euroValue}`);
    setResult(`€${euroValue} (Euro)`);
  };

  return (
    <div className="currency-panel">
      <h2>Currency Convertor!!!</h2>
      <form className="converter-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount"><b>Amount:</b></label>
          <input
            id="amount"
            type="number"
            value={rupees}
            placeholder="INR"
            min="0"
            onChange={e => setRupees(e.target.value)}
            required
            className="input-txt"
          />
        </div>
        <div>
          <label htmlFor="currency"><b>Currency:</b></label>
          <select id="currency" disabled>
            <option>Euro</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {result && (
        <div className="currency-result">{result}</div>
      )}
    </div>
  );
}

export default CurrencyConvertor;
