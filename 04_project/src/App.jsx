import { useState } from "react";
import useCurrencyInfo from "./hooks";
import InputBox from "./components/InputBox";

function App() {
  let [amount, setAmount] = useState("0");
  let [convertedAmount, setConvertedAmount] = useState("0");
  let [from, setFrom] = useState("USD");
  let [to, setTo] = useState("INR");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  console.log(options);

  const convert = () => {
    const amt = parseFloat(amount);
    if (!isNaN(amt)) {
      setConvertedAmount((amt * currencyInfo[to]).toFixed(2));
    } else {
      setConvertedAmount("0");
    }
  };

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                amountDisable
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                onAmountChange={() => {}}
                selectedCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg
              "
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
