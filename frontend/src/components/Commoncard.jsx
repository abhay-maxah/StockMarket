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
        setData(response.data.priceInfo.lastPrice);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      }
    };

    if (symbol) {
      fetchData(); // initial fetch
      intervalId = setInterval(fetchData, 2000); // fetch every 5 seconds
    }

    return () => clearInterval(intervalId); // cleanup on unmount
  }, [symbol]);

  if (!data && !error) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>{symbol}</h2>
      <div>Live Price: ₹{data}</div>
    </div>
  );
};

export default Commoncard;
