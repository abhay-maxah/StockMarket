import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Commoncard = ({ symbol }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/equity/${symbol}`);
        setData(response.data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      }
    };

    if (symbol) {
      fetchData();
      intervalId = setInterval(fetchData, 2000);
    }

    return () => clearInterval(intervalId);
  }, [symbol]);

  if (!data && !error) {
    return (
      <div className="p-6 bg-white shadow-md rounded-md text-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-100 text-red-700 shadow-md rounded-md text-center">
        Error: {error}
      </div>
    );
  }

  const priceInfo = data.priceInfo;

  const isPositive = priceInfo.change >= 0;
  const priceColor = isPositive ? 'text-green-600' : 'text-red-600';

  return (
    <div className="p-5 max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-blue-700">{symbol}</h2>
      <p className="text-sm text-gray-500 mb-3">Live Market Price (updates every 2s)</p>

      <div className="text-3xl font-extrabold mb-2">
        ₹<span className={priceColor}>{priceInfo.lastPrice.toFixed(2)}</span>
      </div>

      <div className={`text-sm ${priceColor} font-semibold mb-4`}>
        {priceInfo.change >= 0 ? '▲' : '▼'} {priceInfo.change.toFixed(2)} (
        {priceInfo.pChange.toFixed(2)}%)
      </div>

      <div className="text-xs text-gray-700 space-y-1">
        <p><strong>Open:</strong> ₹{priceInfo.open}</p>
        <p><strong>Previous Close:</strong> ₹{priceInfo.previousClose}</p>
        <p><strong>Day's High:</strong> ₹{priceInfo.intraDayHighLow.max}</p>
        <p><strong>Day's Low:</strong> ₹{priceInfo.intraDayHighLow.min}</p>
      </div>
    </div>
  );
};

export default Commoncard;
