import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrencyData() {
      try {
        const response = await fetch(
          `https://api.currencyapi.com/v3/latest?apikey=cur_live_ExJtz0McIkogG8aGBhgdyRCwVAqcmuXWnGrgsxf0&base_currency=${baseCurrency.toUpperCase()}`
        );

        const json = await response.json();

        // 🛡️ Check if API returned proper data
        if (!json.data || typeof json.data !== "object") {
          console.error("❌ Invalid API response", json);
          setData({});
          return;
        }

        // ✅ Simplify data: { INR: 83.1, EUR: 0.9, ... }
        const simplifiedRates = {};
        for (let currency in json.data) {
          simplifiedRates[currency] = json.data[currency].value;
        }

        setData(simplifiedRates);
      } catch (err) {
        console.error("❌ Currency API fetch failed", err);
        setData({});
      }
    }

    fetchCurrencyData();
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
