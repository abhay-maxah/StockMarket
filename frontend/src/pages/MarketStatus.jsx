import React, { useState, useEffect } from 'react';

const MarketStatus = () => {
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/marketStatus');
        if (!response.ok) throw new Error('Failed to fetch market status');
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketStatus();
  }, []);

  if (loading) return <div className="text-center text-xl text-gray-600">Loading Market Data...</div>;
  if (error) return <div className="text-center text-xl text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-10">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">📈 Market Overview</h1>

      {/* Market State Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">🗂 Market States</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {marketData.marketState.map((market, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-blue-600">{market.market}</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li><strong>Status:</strong> {market.marketStatus}</li>
                <li><strong>Trade Date:</strong> {market.tradeDate}</li>
                <li><strong>Index:</strong> {market.index || 'N/A'}</li>
                <li><strong>Last:</strong> {market.last || 'N/A'}</li>
                <li><strong>Variation:</strong> {market.variation || 'N/A'}</li>
                <li><strong>% Change:</strong> {market.percentChange || 'N/A'}</li>
                <li><strong>Message:</strong> {market.marketStatusMessage}</li>
                {market.expiryDate && <li><strong>Expiry:</strong> {market.expiryDate}</li>}
                {market.updated_time && <li><strong>Updated:</strong> {market.updated_time}</li>}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Market Cap Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">💰 Market Capitalization</h2>
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Time Stamp:</strong> {marketData.marketcap.timeStamp}</p>
          <p><strong>TR Dollars:</strong> {marketData.marketcap.marketCapinTRDollars}</p>
          <p><strong>LAC CR Rupees:</strong> {marketData.marketcap.marketCapinLACCRRupeesFormatted}</p>
          <p><strong>CR Rupees:</strong> {marketData.marketcap.marketCapinCRRupeesFormatted}</p>
        </div>
      </section>

      {/* NIFTY 50 Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">📊 NIFTY 50 Snapshot</h2>
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Date & Time:</strong> {marketData.indicativenifty50.dateTime}</p>
          <p><strong>Closing Value:</strong> {marketData.indicativenifty50.closingValue}</p>
          <p><strong>Final Closing:</strong> {marketData.indicativenifty50.finalClosingValue}</p>
          <p><strong>Change:</strong> {marketData.indicativenifty50.change}</p>
          <p><strong>% Change:</strong> {marketData.indicativenifty50.perChange}</p>
          <p><strong>Status:</strong> {marketData.indicativenifty50.status}</p>
        </div>
      </section>

      {/* Nifty Future Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">📘 GIFT Nifty Futures</h2>
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Instrument Type:</strong> {marketData.giftnifty.INSTRUMENTTYPE}</p>
          <p><strong>Symbol:</strong> {marketData.giftnifty.SYMBOL}</p>
          <p><strong>Expiry Date:</strong> {marketData.giftnifty.EXPIRYDATE}</p>
          <p><strong>Last Price:</strong> {marketData.giftnifty.LASTPRICE}</p>
          <p><strong>Day Change:</strong> {marketData.giftnifty.DAYCHANGE}</p>
          <p><strong>% Change:</strong> {marketData.giftnifty.PERCHANGE}</p>
          <p><strong>Contracts Traded:</strong> {marketData.giftnifty.CONTRACTSTRADED}</p>
          <p><strong>Timestamp:</strong> {marketData.giftnifty.TIMESTMP}</p>
        </div>
      </section>
    </div>
  );
};

export default MarketStatus;
