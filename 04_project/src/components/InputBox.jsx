function InputBox({
  label,
  amount,
  onAmountChange,
  selectedCurrency = "usd",
  onCurrencyChange,
  currencyOptions = [],
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="text"
          placeholder="Amount"
          inputMode="decimal"
          min={0}
          value={amount}
          onChange={(e) => {
            // Only allow numbers and decimal points
            const val = e.target.value;
            if (val === "" || /^\d*\.?\d*$/.test(val)) {
              onAmountChange(val); // pass string
            }
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
