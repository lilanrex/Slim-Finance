import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StockTicker.css';

const API_KEY = process.env.REACT_APP_STOCK_API_KEY; // Replace with your actual Finnhub API key

const StockTicker = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      const symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'META', 'TSLA', 'NFLX', 'NVDA', 'JPM', 'DIS'];

      try {
        const responses = await Promise.all(
          symbols.map(symbol =>
            axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`)
          )
        );

        const data = responses.map((response, index) => ({
          symbol: symbols[index],
          price: response.data.c,
          change: `${response.data.dp.toFixed(2)}%`,
        }));

        setStocks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setLoading(false);
      }
    };

    fetchStockData();
    // Set up an interval to fetch data every 5 minutes
    const interval = setInterval(fetchStockData, 300000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="stock-ticker">
      <div className="ticker-wrap">
        <div className="ticker">
          {stocks.map((stock, index) => (
            <div key={index} className="ticker-item">
              <span className="symbol">{stock.symbol}</span>
              <span className="price">${stock.price.toFixed(2)}</span>
              <span className={`change ${parseFloat(stock.change) >= 0 ? 'positive' : 'negative'}`}>
                {stock.change.startsWith('-') ? '' : '+'}
                {stock.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockTicker;